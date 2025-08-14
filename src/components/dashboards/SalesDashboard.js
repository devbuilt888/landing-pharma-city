import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  FunnelChart,
  Funnel,
  LabelList
} from 'recharts';

const salesData = [
  { month: 'Jan', revenue: 45000, target: 50000, leads: 120, conversions: 85 },
  { month: 'Feb', revenue: 52000, target: 50000, leads: 135, conversions: 95 },
  { month: 'Mar', revenue: 48000, target: 55000, leads: 110, conversions: 78 },
  { month: 'Apr', revenue: 61000, target: 55000, leads: 150, conversions: 112 },
  { month: 'May', revenue: 55000, target: 60000, leads: 140, conversions: 98 },
  { month: 'Jun', revenue: 67000, target: 60000, leads: 165, conversions: 125 }
];

const radarData = [
  { subject: 'Lead Generation', A: 120, B: 110, fullMark: 150 },
  { subject: 'Conversion Rate', A: 98, B: 130, fullMark: 150 },
  { subject: 'Customer Retention', A: 86, B: 95, fullMark: 150 },
  { subject: 'Revenue Growth', A: 99, B: 85, fullMark: 150 },
  { subject: 'Market Penetration', A: 85, B: 90, fullMark: 150 },
  { subject: 'Client Satisfaction', A: 65, B: 75, fullMark: 150 }
];

const funnelData = [
  { name: 'Leads', value: 1000, fill: '#8884d8' },
  { name: 'Qualified', value: 750, fill: '#83a6ed' },
  { name: 'Proposals', value: 500, fill: '#8dd1e1' },
  { name: 'Negotiations', value: 250, fill: '#82ca9d' },
  { name: 'Closed Deals', value: 125, fill: '#a4de6c' }
];

const SalesDashboard = () => {
  return (
    <>
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">$348K</div>
          <div className="stat-label">Total Revenue</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">125</div>
          <div className="stat-label">Deals Closed</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">12.5%</div>
          <div className="stat-label">Conversion Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">$2,784</div>
          <div className="stat-label">Avg Deal Size</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3 className="chart-title">📈 Revenue vs Targets</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" name="Actual Revenue" />
                <Line type="monotone" dataKey="target" stroke="#ff7300" name="Target" strokeWidth={3} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Monthly revenue performance against targets
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🎯 Sales Performance Radar</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Q1" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Q2" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Tooltip />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Quarterly performance comparison across key metrics
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🔄 Sales Funnel</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <FunnelChart>
                <Tooltip />
                <Funnel dataKey="value" data={funnelData} isAnimationActive>
                  <LabelList position="center" fill="#fff" stroke="none" />
                </Funnel>
              </FunnelChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Sales pipeline conversion from leads to closed deals
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">📊 Lead Conversion Trends</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="leads" fill="#413ea0" name="Leads" />
                <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#ff7300" strokeWidth={3} name="Conversions" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Lead generation and conversion performance over time
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesDashboard; 