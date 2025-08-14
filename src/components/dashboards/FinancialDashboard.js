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
  TreemapChart,
  Treemap
} from 'recharts';

const cashFlowData = [
  { month: 'Jan', inflow: 150000, outflow: 120000, net: 30000 },
  { month: 'Feb', inflow: 165000, outflow: 135000, net: 30000 },
  { month: 'Mar', inflow: 180000, outflow: 140000, net: 40000 },
  { month: 'Apr', inflow: 195000, outflow: 155000, net: 40000 },
  { month: 'May', inflow: 210000, outflow: 170000, net: 40000 },
  { month: 'Jun', inflow: 225000, outflow: 180000, net: 45000 }
];

const expenseData = [
  { name: 'Salaries', value: 45, amount: 450000 },
  { name: 'Marketing', value: 20, amount: 200000 },
  { name: 'Operations', value: 15, amount: 150000 },
  { name: 'Technology', value: 10, amount: 100000 },
  { name: 'Other', value: 10, amount: 100000 }
];

const profitData = [
  { quarter: 'Q1 2023', revenue: 540000, expenses: 395000, profit: 145000 },
  { quarter: 'Q2 2023', revenue: 585000, expenses: 425000, profit: 160000 },
  { quarter: 'Q3 2023', revenue: 620000, expenses: 450000, profit: 170000 },
  { quarter: 'Q4 2023', revenue: 675000, expenses: 485000, profit: 190000 },
  { quarter: 'Q1 2024', revenue: 720000, expenses: 515000, profit: 205000 },
  { quarter: 'Q2 2024', revenue: 765000, expenses: 545000, profit: 220000 }
];

const assetData = [
  { name: 'Cash', size: 2500000, fill: '#8884d8' },
  { name: 'Investments', size: 1800000, fill: '#82ca9d' },
  { name: 'Real Estate', size: 3200000, fill: '#ffc658' },
  { name: 'Equipment', size: 1200000, fill: '#ff7c7c' },
  { name: 'Inventory', size: 800000, fill: '#8dd1e1' }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const FinancialDashboard = () => {
  return (
    <>
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">$9.5M</div>
          <div className="stat-label">Total Assets</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">$1.29M</div>
          <div className="stat-label">Net Profit (YTD)</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">18.5%</div>
          <div className="stat-label">Profit Margin</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">$225K</div>
          <div className="stat-label">Monthly Cash Flow</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3 className="chart-title">💰 Cash Flow Analysis</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cashFlowData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend />
                <Area type="monotone" dataKey="inflow" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="outflow" stackId="2" stroke="#8884d8" fill="#8884d8" />
                <Line type="monotone" dataKey="net" stroke="#ff7300" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Monthly cash inflows, outflows, and net cash position
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">📊 Expense Breakdown</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Distribution of operating expenses by category
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">📈 Profit & Loss Trends</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={profitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend />
                <Bar dataKey="revenue" fill="#82ca9d" name="Revenue" />
                <Bar dataKey="expenses" fill="#8884d8" name="Expenses" />
                <Bar dataKey="profit" fill="#ffc658" name="Net Profit" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Quarterly revenue, expenses, and profit performance
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">🏦 Asset Portfolio</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <Treemap
                data={assetData}
                dataKey="size"
                ratio={4/3}
                stroke="#fff"
                fill="#8884d8"
              />
            </ResponsiveContainer>
          </div>
          <div className="chart-description">
            Asset allocation and portfolio composition treemap
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialDashboard; 