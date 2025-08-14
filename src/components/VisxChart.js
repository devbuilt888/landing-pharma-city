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
  { category: 'Cardiovascular', generic: 120, branded: 180 },
  { category: 'Respiratory', generic: 90, branded: 150 },
  { category: 'Neurological', generic: 70, branded: 110 },
  { category: 'Endocrine', generic: 80, branded: 130 },
  { category: 'Oncology', generic: 60, branded: 200 }
];

const VisxChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="category" 
          angle={-45} 
          textAnchor="end" 
          height={100}
          interval={0}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="generic" fill="#6c5ce7" name="Generic" />
        <Bar dataKey="branded" fill="#a29bfe" name="Branded" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VisxChart; 