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
  ScatterChart,
  Scatter
} from 'recharts';

const salesData = [
  { day: 'Mon', orders: 145, revenue: 12500, visitors: 2300, conversion: 6.3 },
  { day: 'Tue', orders: 165, revenue: 14200, visitors: 2650, conversion: 6.2 },
  { day: 'Wed', orders: 189, revenue: 16800, visitors: 2890, conversion: 6.5 },
  { day: 'Thu', orders: 198, revenue: 18200, visitors: 3100, conversion: 6.4 },
  { day: 'Fri', orders: 234, revenue: 21500, visitors: 3450, conversion: 6.8 },
  { day: 'Sat', orders: 287, revenue: 26200, visitors: 4200, conversion: 6.8 },
  { day: 'Sun', orders: 312, revenue: 28900, visitors: 4650, conversion: 6.7 }
];

const categoryData = [
  { name: 'Electronics', value: 35, sales: 125000 },
  { name: 'Clothing', value: 25, sales: 89000 },
  { name: 'Home & Garden', value: 20, sales: 71000 },
  { name: 'Sports', value: 12, sales: 43000 },
  { name: 'Books', value: 8, sales: 28000 }
];

const customerData = [
  { segment: 'New', count: 450, revenue: 35000, avgOrder: 78 },
  { segment: 'Returning', count: 680, revenue: 89000, avgOrder: 131 },
  { segment: 'VIP', count: 120, revenue: 67000, avgOrder: 558 },
  { segment: 'Inactive', count: 890, revenue: 12000, avgOrder: 13 }
];

const productPerformance = [
  { product: 'Smartphone', price: 699, units: 45, revenue: 31455 },
  { product: 'Laptop', price: 1299, units: 28, revenue: 36372 },
  { product: 'Headphones', price: 199, units: 89, revenue: 17711 },
  { product: 'Tablet', price: 499, units: 56, revenue: 27944 },
  { product: 'Watch', price: 299, units: 67, revenue: 20033 },
  { product: 'Speaker', price: 149, units: 78, revenue: 11622 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const EcommerceDashboard = () => {
  return (
    <>
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">$118.3K</div>
          <div className="stat-label">Weekly Revenue</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">1,530</div>
          <div className="stat-label">Total Orders</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">6.5%</div>
          <div className="stat-label">Conversion Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">$77</div>
          <div className="stat-label">Avg Order Value</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3 className="chart-title">📊 Daily Sales Performance</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#82ca9d" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Daily revenue trends and order volume throughout the week
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🛍️ Category Performance</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Sales distribution across product categories
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">👥 Customer Segments</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={customerData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="segment" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="count" fill="#8884d8" name="Customer Count" />
                <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Customer segmentation by behavior and revenue contribution
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">📱 Product Performance</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart data={productPerformance}>
                <CartesianGrid />
                <XAxis type="number" dataKey="price" name="Price" unit="$" />
                <YAxis type="number" dataKey="units" name="Units Sold" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Products" dataKey="revenue" fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Product performance analysis: price vs units sold correlation
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommerceDashboard; 