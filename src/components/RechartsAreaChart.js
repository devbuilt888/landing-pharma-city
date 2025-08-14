import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', generic: 4000, branded: 2400, total: 6400 },
  { month: 'Feb', generic: 3000, branded: 1398, total: 4398 },
  { month: 'Mar', generic: 2000, branded: 9800, total: 11800 },
  { month: 'Apr', generic: 2780, branded: 3908, total: 6688 },
  { month: 'May', generic: 1890, branded: 4800, total: 6690 },
  { month: 'Jun', generic: 2390, branded: 3800, total: 6190 },
  { month: 'Jul', generic: 3490, branded: 4300, total: 7790 }
];

const RechartsAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorGeneric" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorBranded" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="generic"
          stackId="1"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorGeneric)"
        />
        <Area
          type="monotone"
          dataKey="branded"
          stackId="1"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorBranded)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RechartsAreaChart; 