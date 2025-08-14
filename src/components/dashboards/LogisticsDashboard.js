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

const shipmentData = [
  { day: 'Mon', outbound: 125, inbound: 89, delayed: 8, onTime: 92.3 },
  { day: 'Tue', outbound: 142, inbound: 96, delayed: 6, onTime: 94.2 },
  { day: 'Wed', outbound: 138, inbound: 112, delayed: 12, onTime: 89.7 },
  { day: 'Thu', outbound: 156, inbound: 108, delayed: 9, onTime: 92.8 },
  { day: 'Fri', outbound: 189, inbound: 134, delayed: 15, onTime: 88.9 },
  { day: 'Sat', outbound: 98, inbound: 67, delayed: 4, onTime: 95.1 },
  { day: 'Sun', outbound: 76, inbound: 45, delayed: 2, onTime: 96.7 }
];

const carrierData = [
  { name: 'FedEx', value: 35, cost: 45600, onTime: 94.2 },
  { name: 'UPS', value: 28, cost: 38900, onTime: 91.8 },
  { name: 'DHL', value: 15, cost: 28400, onTime: 96.1 },
  { name: 'USPS', value: 12, cost: 18200, onTime: 87.5 },
  { name: 'Other', value: 10, cost: 15600, onTime: 89.3 }
];

const warehouseData = [
  { location: 'East Coast', capacity: 85, utilization: 78, orders: 456 },
  { location: 'West Coast', capacity: 92, utilization: 84, orders: 523 },
  { location: 'Midwest', capacity: 76, utilization: 68, orders: 389 },
  { location: 'South', capacity: 88, utilization: 82, orders: 467 },
  { location: 'Central', capacity: 94, utilization: 71, orders: 298 }
];

const inventoryData = [
  { category: 'Electronics', turnover: 8.2, stockouts: 3, surplus: 12 },
  { category: 'Clothing', turnover: 6.8, stockouts: 8, surplus: 18 },
  { category: 'Books', turnover: 4.5, stockouts: 12, surplus: 25 },
  { category: 'Home', turnover: 5.9, stockouts: 6, surplus: 15 },
  { category: 'Sports', turnover: 7.1, stockouts: 4, surplus: 9 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const LogisticsDashboard = () => {
  return (
    <>
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">924</div>
          <div className="stat-label">Weekly Shipments</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">92.3%</div>
          <div className="stat-label">On-Time Delivery</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">$147K</div>
          <div className="stat-label">Shipping Costs</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">76.6%</div>
          <div className="stat-label">Warehouse Utilization</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3 className="chart-title">🚚 Daily Shipment Volume</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={shipmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="outbound" fill="#8884d8" name="Outbound" />
                <Bar yAxisId="left" dataKey="inbound" fill="#82ca9d" name="Inbound" />
                <Line yAxisId="right" type="monotone" dataKey="onTime" stroke="#ffc658" strokeWidth={3} name="On-Time %" />
                <Bar yAxisId="left" dataKey="delayed" fill="#ff7c7c" name="Delayed" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Daily shipping volumes with on-time delivery performance tracking
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">📦 Carrier Distribution</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={carrierData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {carrierData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Shipping volume distribution across carrier partners
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🏭 Warehouse Performance</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={warehouseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" angle={-45} textAnchor="end" height={80} />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="capacity" fill="#e0e0e0" name="Capacity %" />
                <Bar yAxisId="left" dataKey="utilization" fill="#8884d8" name="Utilization %" />
                <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#82ca9d" strokeWidth={3} name="Orders" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Warehouse capacity utilization and order processing by location
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">📊 Inventory Management</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inventoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="turnover" stroke="#8884d8" strokeWidth={3} name="Turnover Rate" />
                <Bar yAxisId="right" dataKey="stockouts" fill="#ff7c7c" name="Stockouts" />
                <Bar yAxisId="right" dataKey="surplus" fill="#ffc658" name="Surplus" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Inventory turnover rates with stockout and surplus analysis by category
          </div>
        </div>
      </div>
    </>
  );
};

export default LogisticsDashboard; 