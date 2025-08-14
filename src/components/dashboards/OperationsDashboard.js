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
  ComposedChart
} from 'recharts';

const efficiencyData = [
  { hour: '6AM', throughput: 95, utilization: 87, quality: 96.5, incidents: 2 },
  { hour: '8AM', throughput: 102, utilization: 92, quality: 95.8, incidents: 1 },
  { hour: '10AM', throughput: 108, utilization: 96, quality: 97.2, incidents: 0 },
  { hour: '12PM', throughput: 98, utilization: 89, quality: 94.1, incidents: 3 },
  { hour: '2PM', throughput: 105, utilization: 94, quality: 96.8, incidents: 1 },
  { hour: '4PM', throughput: 110, utilization: 98, quality: 98.1, incidents: 0 },
  { hour: '6PM', throughput: 92, utilization: 84, quality: 93.7, incidents: 2 }
];

const resourceData = [
  { resource: 'Equipment', utilization: 89, capacity: 100, fill: '#8884d8' },
  { resource: 'Personnel', utilization: 76, capacity: 100, fill: '#82ca9d' },
  { resource: 'Energy', utilization: 82, capacity: 100, fill: '#ffc658' },
  { resource: 'Materials', utilization: 91, capacity: 100, fill: '#ff7c7c' }
];

const processData = [
  { process: 'Intake', efficiency: 94.2, sla: 98.5, errors: 5 },
  { process: 'Processing', efficiency: 91.8, sla: 95.2, errors: 12 },
  { process: 'Quality Check', efficiency: 87.6, sla: 92.8, errors: 8 },
  { process: 'Packaging', efficiency: 96.1, sla: 99.1, errors: 3 },
  { process: 'Shipping', efficiency: 89.4, sla: 94.7, errors: 7 }
];

const kpiData = [
  { metric: 'OEE', current: 85.6, target: 90, trend: 'up' },
  { metric: 'Cycle Time', current: 24.8, target: 22, trend: 'down' },
  { metric: 'First Pass Yield', current: 94.2, target: 96, trend: 'up' },
  { metric: 'Cost per Unit', current: 18.75, target: 17.50, trend: 'down' }
];

const OperationsDashboard = () => {
  return (
    <>
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">85.6%</div>
          <div className="stat-label">Overall Equipment Effectiveness</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">24.8min</div>
          <div className="stat-label">Avg Cycle Time</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">94.2%</div>
          <div className="stat-label">First Pass Yield</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">16</div>
          <div className="stat-label">Safety Incidents</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3 className="chart-title">⚡ Operational Efficiency</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="throughput" fill="#8884d8" stroke="#8884d8" fillOpacity={0.6} name="Throughput" />
                <Line yAxisId="left" type="monotone" dataKey="utilization" stroke="#82ca9d" strokeWidth={3} name="Utilization %" />
                <Line yAxisId="right" type="monotone" dataKey="quality" stroke="#ffc658" strokeWidth={3} name="Quality %" />
                <Bar yAxisId="right" dataKey="incidents" fill="#ff7c7c" name="Incidents" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Hourly operational metrics including throughput, utilization, and quality
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🔧 Resource Utilization</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={resourceData}>
                <RadialBar 
                  minAngle={15} 
                  label={{ position: 'insideStart', fill: '#fff' }} 
                  background 
                  clockWise 
                  dataKey="utilization" 
                />
                <Tooltip formatter={(value) => [`${value}%`, 'Utilization']} />
                <Legend />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Current utilization rates across different operational resources
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🔄 Process Performance</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={processData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="process" angle={-45} textAnchor="end" height={80} />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="efficiency" fill="#8884d8" name="Efficiency %" />
                <Line yAxisId="left" type="monotone" dataKey="sla" stroke="#82ca9d" strokeWidth={3} name="SLA %" />
                <Bar yAxisId="right" dataKey="errors" fill="#ff7c7c" name="Error Count" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Process efficiency, SLA compliance, and error tracking by stage
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">📊 KPI Performance</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={kpiData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metric" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="current" fill="#8884d8" name="Current" />
                <Bar dataKey="target" fill="#e0e0e0" name="Target" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Key performance indicators vs targets across operational metrics
          </div>
        </div>
      </div>
    </>
  );
};

export default OperationsDashboard; 