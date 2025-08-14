import React, { useState } from 'react';
import PharmaDashboard from './dashboards/PharmaDashboard';
import SalesDashboard from './dashboards/SalesDashboard';
import FinancialDashboard from './dashboards/FinancialDashboard';
import HealthcareDashboard from './dashboards/HealthcareDashboard';
import EcommerceDashboard from './dashboards/EcommerceDashboard';
import AnalyticsDashboard from './dashboards/AnalyticsDashboard';
import ManufacturingDashboard from './dashboards/ManufacturingDashboard';
import HRDashboard from './dashboards/HRDashboard';
import MarketingDashboard from './dashboards/MarketingDashboard';
import OperationsDashboard from './dashboards/OperationsDashboard';
import LogisticsDashboard from './dashboards/LogisticsDashboard';

const dashboards = [
  { id: 'pharma', name: '💊 Pharma Analytics', component: PharmaDashboard },
  { id: 'sales', name: '📈 Sales Performance', component: SalesDashboard },
  { id: 'financial', name: '💰 Financial Overview', component: FinancialDashboard },
  { id: 'healthcare', name: '🏥 Healthcare Metrics', component: HealthcareDashboard },
  { id: 'ecommerce', name: '🛒 E-commerce Insights', component: EcommerceDashboard },
  { id: 'analytics', name: '📊 Web Analytics', component: AnalyticsDashboard },
  { id: 'manufacturing', name: '🏭 Manufacturing KPIs', component: ManufacturingDashboard },
  { id: 'hr', name: '👥 HR Dashboard', component: HRDashboard },
  { id: 'marketing', name: '📢 Marketing Campaigns', component: MarketingDashboard },
  { id: 'operations', name: '⚙️ Operations Monitor', component: OperationsDashboard },
  { id: 'logistics', name: '🚚 Logistics Tracking', component: LogisticsDashboard }
];

const Dashboard = () => {
  const [activeDashboard, setActiveDashboard] = useState('pharma');

  const ActiveComponent = dashboards.find(d => d.id === activeDashboard)?.component;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>📊 Visualize your inventory now!</h1>
        <p>Specially thought for companies in the pharmacy business, these dashboards are examples of what's possible, your ideas, your data, easy to see and access, if you got here from an email, you can reply directly to it and we will reply back ASAP!</p>
      </div>

      <div className="dashboard-navigation">
        <div className="nav-container">
          {dashboards.map(dashboard => (
            <button
              key={dashboard.id}
              className={`nav-button ${activeDashboard === dashboard.id ? 'active' : ''}`}
              onClick={() => setActiveDashboard(dashboard.id)}
            >
              {dashboard.name}
            </button>
          ))}
        </div>
      </div>

      <div className="dashboard-content">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};

export default Dashboard; 