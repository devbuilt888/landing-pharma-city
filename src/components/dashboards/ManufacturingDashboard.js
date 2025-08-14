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

const productionData = [
  { shift: '6AM-2PM', produced: 1250, target: 1200, defects: 23, efficiency: 95.2 },
  { shift: '2PM-10PM', produced: 1180, target: 1200, defects: 31, efficiency: 92.8 },
  { shift: '10PM-6AM', produced: 980, target: 1000, defects: 18, efficiency: 96.1 },
  { shift: '6AM-2PM', produced: 1320, target: 1200, defects: 19, efficiency: 97.3 },
  { shift: '2PM-10PM', produced: 1220, target: 1200, defects: 28, efficiency: 93.5 },
  { shift: '10PM-6AM', produced: 1050, target: 1000, defects: 15, efficiency: 97.8 }
];

const qualityData = [
  { category: 'Assembly', passRate: 96.5, fill: '#8884d8' },
  { category: 'Testing', passRate: 94.2, fill: '#82ca9d' },
  { category: 'Packaging', passRate: 98.1, fill: '#ffc658' },
  { category: 'Inspection', passRate: 95.7, fill: '#ff7c7c' }
];

const machineData = [
  { machine: 'Line A', uptime: 94.5, downtime: 5.5, maintenance: 2.1 },
  { machine: 'Line B', uptime: 91.2, downtime: 8.8, maintenance: 4.2 },
  { machine: 'Line C', uptime: 96.8, downtime: 3.2, maintenance: 1.8 },
  { machine: 'Line D', uptime: 89.7, downtime: 10.3, maintenance: 5.1 },
  { machine: 'Line E', uptime: 93.4, downtime: 6.6, maintenance: 3.2 }
];

const inventoryData = [
  { material: 'Raw Materials', current: 85, target: 80, status: 'optimal' },
  { material: 'Components', current: 92, target: 90, status: 'high' },
  { material: 'Finished Goods', current: 76, target: 75, status: 'optimal' },
  { material: 'Packaging', current: 68, target: 70, status: 'low' },
  { material: 'Tools', current: 88, target: 85, status: 'optimal' }
];

const ManufacturingDashboard = () => {
  return (
    <>
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">7,000</div>
          <div className="stat-label">Units Produced</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">95.5%</div>
          <div className="stat-label">Overall Efficiency</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">96.1%</div>
          <div className="stat-label">Quality Pass Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">93.1%</div>
          <div className="stat-label">Equipment Uptime</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3 className="chart-title">🏭 Production Performance</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="shift" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="produced" fill="#8884d8" name="Produced" />
                <Bar yAxisId="left" dataKey="target" fill="#e0e0e0" name="Target" />
                <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#82ca9d" strokeWidth={3} name="Efficiency %" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Production output vs targets with efficiency tracking across shifts
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">✅ Quality Control Metrics</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={qualityData}>
                <RadialBar 
                  minAngle={15} 
                  label={{ position: 'insideStart', fill: '#fff' }} 
                  background 
                  clockWise 
                  dataKey="passRate" 
                />
                <Tooltip formatter={(value) => [`${value}%`, 'Pass Rate']} />
                <Legend />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Quality pass rates across different production stages
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">⚙️ Equipment Performance</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={machineData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="machine" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="uptime" stackId="a" fill="#82ca9d" name="Uptime %" />
                <Bar dataKey="downtime" stackId="a" fill="#ff7c7c" name="Downtime %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Machine uptime and downtime analysis across production lines
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">📦 Inventory Levels</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={inventoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="material" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="current" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} name="Current Level" />
                <Line type="monotone" dataKey="target" stroke="#ff7300" strokeWidth={3} name="Target Level" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Current inventory levels vs target levels across material categories
          </div>
        </div>
      </div>
    </>
  );
};

export default ManufacturingDashboard; 