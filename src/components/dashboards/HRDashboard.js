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
  PieChart,
  Pie,
  Cell,
  ComposedChart
} from 'recharts';

const headcountData = [
  { month: 'Jan', total: 285, hired: 12, terminated: 8, turnover: 2.8 },
  { month: 'Feb', total: 289, hired: 8, terminated: 4, turnover: 1.4 },
  { month: 'Mar', total: 295, hired: 14, terminated: 8, turnover: 2.7 },
  { month: 'Apr', total: 301, hired: 11, terminated: 5, turnover: 1.7 },
  { month: 'May', total: 308, hired: 15, terminated: 8, turnover: 2.6 },
  { month: 'Jun', total: 315, hired: 13, terminated: 6, turnover: 1.9 }
];

const departmentData = [
  { name: 'Engineering', employees: 85, satisfaction: 4.2 },
  { name: 'Sales', employees: 42, satisfaction: 3.9 },
  { name: 'Marketing', employees: 28, satisfaction: 4.1 },
  { name: 'HR', employees: 18, satisfaction: 4.0 },
  { name: 'Finance', employees: 22, satisfaction: 3.8 },
  { name: 'Operations', employees: 35, satisfaction: 3.7 }
];

const performanceData = [
  { name: 'Exceeds Expectations', value: 25, count: 79 },
  { name: 'Meets Expectations', value: 55, count: 173 },
  { name: 'Below Expectations', value: 15, count: 47 },
  { name: 'Needs Improvement', value: 5, count: 16 }
];

const recruitmentData = [
  { stage: 'Applications', count: 1250 },
  { stage: 'Screening', count: 425 },
  { stage: 'Interview', count: 185 },
  { stage: 'Assessment', count: 92 },
  { stage: 'Offer', count: 38 },
  { stage: 'Hired', count: 28 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const HRDashboard = () => {
  return (
    <>
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">315</div>
          <div className="stat-label">Total Employees</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">2.2%</div>
          <div className="stat-label">Avg Turnover Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">28</div>
          <div className="stat-label">New Hires (YTD)</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">4.0</div>
          <div className="stat-label">Employee Satisfaction</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3 className="chart-title">👥 Headcount & Turnover</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={headcountData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" fillOpacity={0.6} name="Total Employees" />
                <Bar yAxisId="left" dataKey="hired" fill="#82ca9d" name="Hired" />
                <Bar yAxisId="left" dataKey="terminated" fill="#ff7c7c" name="Terminated" />
                <Line yAxisId="right" type="monotone" dataKey="turnover" stroke="#ff7300" strokeWidth={3} name="Turnover %" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Monthly headcount changes with hiring, terminations, and turnover rates
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🏢 Department Overview</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="employees" fill="#8884d8" name="Employee Count" />
                <Line yAxisId="right" type="monotone" dataKey="satisfaction" stroke="#82ca9d" strokeWidth={3} name="Satisfaction Score" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Employee distribution and satisfaction scores by department
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">⭐ Performance Distribution</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={performanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Employee performance rating distribution across the organization
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🎯 Recruitment Funnel</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={recruitmentData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="stage" type="category" />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Recruitment pipeline showing candidate flow from application to hire
          </div>
        </div>
      </div>
    </>
  );
};

export default HRDashboard; 