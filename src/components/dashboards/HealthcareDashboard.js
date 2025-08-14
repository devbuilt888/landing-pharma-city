import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const patientData = [
  { month: 'Jan', admissions: 245, discharges: 230, satisfaction: 4.2, readmissions: 15 },
  { month: 'Feb', admissions: 268, discharges: 255, satisfaction: 4.3, readmissions: 12 },
  { month: 'Mar', admissions: 289, discharges: 275, satisfaction: 4.1, readmissions: 18 },
  { month: 'Apr', admissions: 312, discharges: 298, satisfaction: 4.4, readmissions: 14 },
  { month: 'May', admissions: 295, discharges: 285, satisfaction: 4.5, readmissions: 10 },
  { month: 'Jun', admissions: 334, discharges: 320, satisfaction: 4.3, readmissions: 16 }
];

const departmentData = [
  { name: 'Emergency', value: 35, patients: 1250, fill: '#8884d8' },
  { name: 'Cardiology', value: 20, patients: 720, fill: '#82ca9d' },
  { name: 'Orthopedics', value: 15, patients: 540, fill: '#ffc658' },
  { name: 'Pediatrics', value: 12, patients: 430, fill: '#ff7c7c' },
  { name: 'Surgery', value: 10, patients: 360, fill: '#8dd1e1' },
  { name: 'Other', value: 8, patients: 290, fill: '#82d982' }
];

const treatmentData = [
  { treatment: 'Surgery', success: 95, fill: '#8884d8' },
  { treatment: 'Medication', success: 88, fill: '#82ca9d' },
  { treatment: 'Therapy', success: 92, fill: '#ffc658' },
  { treatment: 'Preventive', success: 97, fill: '#ff7c7c' }
];

const bedOccupancy = [
  { ward: 'ICU', occupied: 85, total: 100 },
  { ward: 'General', occupied: 230, total: 280 },
  { ward: 'Pediatric', occupied: 45, total: 60 },
  { ward: 'Maternity', occupied: 32, total: 40 },
  { ward: 'Emergency', occupied: 15, total: 20 }
];

const HealthcareDashboard = () => {
  return (
    <>
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">1,743</div>
          <div className="stat-label">Total Patients</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">87%</div>
          <div className="stat-label">Bed Occupancy</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">4.3</div>
          <div className="stat-label">Patient Satisfaction</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">92%</div>
          <div className="stat-label">Treatment Success</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3 className="chart-title">🏥 Patient Flow</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={patientData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="admissions" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="discharges" stackId="2" stroke="#82ca9d" fill="#82ca9d" />
                <Line type="monotone" dataKey="readmissions" stroke="#ff7300" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Monthly patient admissions, discharges, and readmission rates
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🏨 Department Distribution</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Patient distribution across hospital departments
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">✅ Treatment Success Rates</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={treatmentData}>
                <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="success" />
                <Tooltip />
                <Legend />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Success rates across different treatment categories
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🛏️ Bed Occupancy</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bedOccupancy} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="ward" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="occupied" fill="#8884d8" name="Occupied" />
                <Bar dataKey="total" fill="#e0e0e0" name="Total Capacity" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Current bed occupancy rates across hospital wards
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthcareDashboard; 