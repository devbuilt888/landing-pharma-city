import React from 'react';
import {
  VictoryChart,
  VictoryLine,
  VictoryArea,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
  VictoryLegend
} from 'victory';

const data = [
  { x: 1, y: 2, y2: 3 },
  { x: 2, y: 3, y2: 5 },
  { x: 3, y: 5, y2: 4 },
  { x: 4, y: 4, y2: 6 },
  { x: 5, y: 7, y2: 8 },
  { x: 6, y: 6, y2: 7 },
  { x: 7, y: 8, y2: 9 }
];

const VictoryChartComponent = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <VictoryChart
        theme={VictoryTheme.material}
        width={450}
        height={300}
        padding={{ left: 50, top: 50, right: 50, bottom: 50 }}
      >
        <VictoryLegend
          x={125}
          y={10}
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
          data={[
            { name: "Drug Efficacy", symbol: { fill: "#c43a31" } },
            { name: "Patient Satisfaction", symbol: { fill: "#4f81bd" } }
          ]}
        />
        
        <VictoryArea
          data={data}
          y="y2"
          style={{
            data: { fill: "#4f81bd", fillOpacity: 0.6, stroke: "#4f81bd", strokeWidth: 2 }
          }}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
        />
        
        <VictoryLine
          data={data}
          y="y"
          style={{
            data: { stroke: "#c43a31", strokeWidth: 3 }
          }}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
        />
        
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `${x}%`}
          style={{
            tickLabels: { fontSize: 12, padding: 5 }
          }}
        />
        
        <VictoryAxis
          tickFormat={["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"]}
          style={{
            tickLabels: { fontSize: 12, padding: 5 }
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default VictoryChartComponent; 