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

const trafficData = [
  { date: '01/01', pageViews: 12500, uniqueVisitors: 8900, bounceRate: 35, sessionDuration: 245 },
  { date: '01/02', pageViews: 13200, uniqueVisitors: 9200, bounceRate: 32, sessionDuration: 265 },
  { date: '01/03', pageViews: 11800, uniqueVisitors: 8600, bounceRate: 38, sessionDuration: 230 },
  { date: '01/04', pageViews: 14500, uniqueVisitors: 10200, bounceRate: 29, sessionDuration: 280 },
  { date: '01/05', pageViews: 15800, uniqueVisitors: 11100, bounceRate: 27, sessionDuration: 295 },
  { date: '01/06', pageViews: 17200, uniqueVisitors: 12300, bounceRate: 25, sessionDuration: 310 },
  { date: '01/07', pageViews: 16900, uniqueVisitors: 12000, bounceRate: 26, sessionDuration: 305 }
];

const sourceData = [
  { name: 'Organic Search', value: 45, visitors: 18900 },
  { name: 'Direct', value: 25, visitors: 10500 },
  { name: 'Social Media', value: 15, visitors: 6300 },
  { name: 'Paid Ads', value: 10, visitors: 4200 },
  { name: 'Referral', value: 5, visitors: 2100 }
];

const deviceData = [
  { device: 'Desktop', sessions: 15600, conversions: 890, revenue: 45600 },
  { device: 'Mobile', sessions: 22400, conversions: 1120, revenue: 38900 },
  { device: 'Tablet', sessions: 8900, conversions: 245, revenue: 12800 }
];

const pageData = [
  { page: 'Homepage', views: 8900, engagement: 75, exitRate: 15 },
  { page: 'Product Page', views: 6700, engagement: 85, exitRate: 25 },
  { page: 'Blog', views: 4500, engagement: 68, exitRate: 35 },
  { page: 'About', views: 3200, engagement: 62, exitRate: 45 },
  { page: 'Contact', views: 2800, engagement: 58, exitRate: 55 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const AnalyticsDashboard = () => {
  return (
    <>
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">101.9K</div>
          <div className="stat-label">Total Page Views</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">72.3K</div>
          <div className="stat-label">Unique Visitors</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">29.8%</div>
          <div className="stat-label">Avg Bounce Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">4:47</div>
          <div className="stat-label">Avg Session Duration</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3 className="chart-title">📈 Website Traffic Trends</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="pageViews" fill="#8884d8" stroke="#8884d8" fillOpacity={0.6} />
                <Line yAxisId="left" type="monotone" dataKey="uniqueVisitors" stroke="#82ca9d" strokeWidth={3} />
                <Bar yAxisId="right" dataKey="bounceRate" fill="#ffc658" name="Bounce Rate %" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Daily traffic patterns with page views, unique visitors, and bounce rates
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🌐 Traffic Sources</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Visitor acquisition breakdown by traffic source
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">📱 Device Performance</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deviceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="device" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="sessions" fill="#8884d8" name="Sessions" />
                <Bar yAxisId="left" dataKey="conversions" fill="#82ca9d" name="Conversions" />
                <Bar yAxisId="right" dataKey="revenue" fill="#ffc658" name="Revenue ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Performance metrics across different device types
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">📄 Top Pages Performance</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={pageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="page" angle={-45} textAnchor="end" height={80} />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="views" fill="#8884d8" name="Page Views" />
                <Line yAxisId="right" type="monotone" dataKey="engagement" stroke="#82ca9d" strokeWidth={3} name="Engagement %" />
                <Line yAxisId="right" type="monotone" dataKey="exitRate" stroke="#ff7300" strokeWidth={3} name="Exit Rate %" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Page performance with views, engagement, and exit rates
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsDashboard; 