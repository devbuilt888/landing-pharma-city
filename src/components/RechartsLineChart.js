import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', sales: 4000, revenue: 2400, patients: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398, patients: 2210 },
  { month: 'Mar', sales: 2000, revenue: 9800, patients: 2290 },
  { month: 'Apr', sales: 2780, revenue: 3908, patients: 2000 },
  { month: 'May', sales: 1890, revenue: 4800, patients: 2181 },
  { month: 'Jun', sales: 2390, revenue: 3800, patients: 2500 },
  { month: 'Jul', sales: 3490, revenue: 4300, patients: 2100 },
  { month: 'Aug', sales: 4000, revenue: 2400, patients: 2400 },
  { month: 'Sep', sales: 3000, revenue: 1398, patients: 2210 },
  { month: 'Oct', sales: 2000, revenue: 9800, patients: 2290 },
  { month: 'Nov', sales: 2780, revenue: 3908, patients: 2000 },
  { month: 'Dec', sales: 1890, revenue: 4800, patients: 2181 }
];

const RechartsLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="sales" 
          stroke="#8884d8" 
          strokeWidth={2}
          dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
        />
        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="#82ca9d" 
          strokeWidth={2}
          dot={{ fill: '#82ca9d', strokeWidth: 2, r: 4 }}
        />
        <Line 
          type="monotone" 
          dataKey="patients" 
          stroke="#ffc658" 
          strokeWidth={2}
          dot={{ fill: '#ffc658', strokeWidth: 2, r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RechartsLineChart; 