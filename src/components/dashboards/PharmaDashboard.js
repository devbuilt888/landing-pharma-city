import React from 'react';
import RechartsLineChart from '../RechartsLineChart';
import RechartsBarChart from '../RechartsBarChart';
import RechartsAreaChart from '../RechartsAreaChart';
import RechartsPieChart from '../RechartsPieChart';
import RechartsScatterChart from '../RechartsScatterChart';
import ChartJSChart from '../ChartJSChart';
import VictoryChart from '../VictoryChart';
import VisxChart from '../VisxChart';

const PharmaDashboard = () => {
  return (
    <>
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">$2.4M</div>
          <div className="stat-label">Monthly Revenue</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">1,250</div>
          <div className="stat-label">Active Patients</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">89%</div>
          <div className="stat-label">Inventory Level</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">156</div>
          <div className="stat-label">Drug Categories</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3 className="chart-title">📈 Sales Trends</h3>
          <div className="chart-wrapper">
            <RechartsLineChart />
          </div>
          <div className="chart-description">
            Monthly sales, revenue, and patient data showing pharmaceutical performance
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">📊 Drug Categories</h3>
          <div className="chart-wrapper">
            <RechartsBarChart />
          </div>
          <div className="chart-description">
            Comparison of prescribed vs sold quantities across medication categories
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🏔️ Market Share</h3>
          <div className="chart-wrapper">
            <RechartsAreaChart />
          </div>
          <div className="chart-description">
            Generic vs branded drug market share trends over time
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🥧 Product Distribution</h3>
          <div className="chart-wrapper">
            <RechartsPieChart />
          </div>
          <div className="chart-description">
            Market share breakdown by product category
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">⭐ Efficacy Analysis</h3>
          <div className="chart-wrapper">
            <RechartsScatterChart />
          </div>
          <div className="chart-description">
            Drug effectiveness vs side effects correlation analysis
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">📋 Performance Mix</h3>
          <div className="chart-wrapper">
            <ChartJSChart />
          </div>
          <div className="chart-description">
            Combined view of sales trends and inventory levels
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🎯 Quality Metrics</h3>
          <div className="chart-wrapper">
            <VictoryChart />
          </div>
          <div className="chart-description">
            Drug efficacy and patient satisfaction trends
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🎨 Category Analysis</h3>
          <div className="chart-wrapper">
            <VisxChart />
          </div>
          <div className="chart-description">
            Generic vs branded comparison across therapeutic areas
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmaDashboard; 