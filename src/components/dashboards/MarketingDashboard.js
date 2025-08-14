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

const campaignData = [
  { week: 'W1', impressions: 125000, clicks: 3750, conversions: 187, spend: 5200 },
  { week: 'W2', impressions: 142000, clicks: 4260, conversions: 213, spend: 5800 },
  { week: 'W3', impressions: 138000, clicks: 4140, conversions: 225, spend: 5600 },
  { week: 'W4', impressions: 156000, clicks: 4680, conversions: 267, spend: 6200 },
  { week: 'W5', impressions: 163000, clicks: 4890, conversions: 294, spend: 6500 },
  { week: 'W6', impressions: 175000, clicks: 5250, conversions: 315, spend: 6800 }
];

const channelData = [
  { name: 'Google Ads', value: 35, spend: 15400, conversions: 425 },
  { name: 'Facebook', value: 25, spend: 11000, spend: 298 },
  { name: 'LinkedIn', value: 20, spend: 8800, conversions: 187 },
  { name: 'Email', value: 15, spend: 6600, conversions: 156 },
  { name: 'Other', value: 5, spend: 2200, conversions: 67 }
];

const contentData = [
  { type: 'Blog Posts', engagement: 4.2, reach: 12500, shares: 245 },
  { type: 'Videos', engagement: 6.8, reach: 18900, shares: 467 },
  { type: 'Infographics', engagement: 5.1, reach: 8700, shares: 189 },
  { type: 'Podcasts', engagement: 7.2, reach: 6500, shares: 98 },
  { type: 'Webinars', engagement: 8.5, reach: 4200, shares: 78 }
];

const socialData = [
  { platform: 'Instagram', followers: 24500, engagement: 3.8, posts: 45 },
  { platform: 'Twitter', followers: 18200, engagement: 2.1, posts: 120 },
  { platform: 'LinkedIn', followers: 12800, engagement: 4.5, posts: 28 },
  { platform: 'Facebook', followers: 31200, engagement: 2.9, posts: 35 },
  { platform: 'YouTube', followers: 8900, engagement: 6.2, posts: 12 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const MarketingDashboard = () => {
  return (
    <>
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">$36.2K</div>
          <div className="stat-label">Total Ad Spend</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">1,501</div>
          <div className="stat-label">Total Conversions</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">3.1%</div>
          <div className="stat-label">Avg CTR</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">4.2</div>
          <div className="stat-label">ROAS</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3 className="chart-title">📊 Campaign Performance</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="impressions" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} name="Impressions" />
                <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#82ca9d" strokeWidth={3} name="Clicks" />
                <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#ffc658" strokeWidth={3} name="Conversions" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Weekly campaign performance showing impressions, clicks, and conversions
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">💰 Channel Spend Distribution</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Marketing budget allocation across different advertising channels
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">📝 Content Performance</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart data={contentData}>
                <CartesianGrid />
                <XAxis type="number" dataKey="reach" name="Reach" />
                <YAxis type="number" dataKey="engagement" name="Engagement Rate" unit="%" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Content Types" dataKey="shares" fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Content performance analysis: reach vs engagement correlation by type
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">📱 Social Media Metrics</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={socialData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="platform" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="followers" fill="#8884d8" name="Followers" />
                <Bar yAxisId="left" dataKey="posts" fill="#82ca9d" name="Posts" />
                <Line yAxisId="right" type="monotone" dataKey="engagement" stroke="#ffc658" strokeWidth={3} name="Engagement %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Social media platform performance with follower growth and engagement
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingDashboard; 