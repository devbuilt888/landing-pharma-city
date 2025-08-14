import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const data01 = [
  { x: 100, y: 200, z: 200, category: 'Antibiotics' },
  { x: 120, y: 100, z: 260, category: 'Antibiotics' },
  { x: 170, y: 300, z: 400, category: 'Antibiotics' },
  { x: 140, y: 250, z: 280, category: 'Antibiotics' },
  { x: 150, y: 400, z: 500, category: 'Antibiotics' },
  { x: 110, y: 280, z: 200, category: 'Antibiotics' }
];

const data02 = [
  { x: 300, y: 300, z: 200, category: 'Painkillers' },
  { x: 400, y: 500, z: 260, category: 'Painkillers' },
  { x: 200, y: 700, z: 400, category: 'Painkillers' },
  { x: 340, y: 350, z: 280, category: 'Painkillers' },
  { x: 560, y: 500, z: 500, category: 'Painkillers' },
  { x: 230, y: 780, z: 200, category: 'Painkillers' }
];

const RechartsScatterChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="effectiveness" unit="%" />
        <YAxis type="number" dataKey="y" name="side effects" unit="%" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter 
          name="Antibiotics" 
          data={data01} 
          fill="#8884d8"
          shape="circle"
        />
        <Scatter 
          name="Painkillers" 
          data={data02} 
          fill="#82ca9d"
          shape="triangle"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default RechartsScatterChart; 