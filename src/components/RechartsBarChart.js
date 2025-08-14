import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { category: 'Antibiotics', prescribed: 4000, sold: 2400, inventory: 2400 },
  { category: 'Painkillers', prescribed: 3000, sold: 1398, inventory: 2210 },
  { category: 'Vitamins', prescribed: 2000, sold: 9800, inventory: 2290 },
  { category: 'Heart Meds', prescribed: 2780, sold: 3908, inventory: 2000 },
  { category: 'Diabetes', prescribed: 1890, sold: 4800, inventory: 2181 },
  { category: 'Blood Pressure', prescribed: 2390, sold: 3800, inventory: 2500 }
];

const RechartsBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="prescribed" fill="#8884d8" />
        <Bar dataKey="sold" fill="#82ca9d" />
        <Bar dataKey="inventory" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RechartsBarChart; 