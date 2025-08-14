import React from 'react';
import { Group } from '@visx/group';
import { BarGroup } from '@visx/shape';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';

const data = [
  { category: 'Cardiovascular', generic: 120, branded: 180 },
  { category: 'Respiratory', generic: 90, branded: 150 },
  { category: 'Neurological', generic: 70, branded: 110 },
  { category: 'Endocrine', generic: 80, branded: 130 },
  { category: 'Oncology', generic: 60, branded: 200 }
];

const keys = ['generic', 'branded'];

const width = 400;
const height = 300;
const margin = { top: 40, right: 40, bottom: 40, left: 40 };
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// accessors
const getCategory = (d) => d.category;

// scales
const categoryScale = scaleBand({
  domain: data.map(getCategory),
  range: [0, xMax],
  padding: 0.2,
});

const drugTypeScale = scaleBand({
  domain: keys,
  range: [0, categoryScale.bandwidth()],
  padding: 0.1,
});

const valueScale = scaleLinear({
  domain: [0, Math.max(...data.map((d) => Math.max(d.generic, d.branded)))],
  range: [yMax, 0],
});

const colorScale = scaleOrdinal({
  domain: keys,
  range: ['#6c5ce7', '#a29bfe'],
});

const VisxChart = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg width={width} height={height}>
        <rect width={width} height={height} fill="white" />
        <Group left={margin.left} top={margin.top}>
          <BarGroup
            data={data}
            keys={keys}
            height={yMax}
            x0={getCategory}
            x0Scale={categoryScale}
            x1Scale={drugTypeScale}
            yScale={valueScale}
            color={colorScale}
          >
            {(barGroups) =>
              barGroups.map((barGroup) => (
                <Group
                  key={`bar-group-${barGroup.index}-${barGroup.x0}`}
                  left={barGroup.x0}
                >
                  {barGroup.bars.map((bar) => (
                    <rect
                      key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                      x={bar.x}
                      y={bar.y}
                      width={bar.width}
                      height={bar.height}
                      fill={bar.color}
                      rx={3}
                    />
                  ))}
                </Group>
              ))
            }
          </BarGroup>
        </Group>
        <AxisBottom
          top={yMax + margin.top}
          left={margin.left}
          scale={categoryScale}
          stroke="#333"
          tickStroke="#333"
          tickLabelProps={{
            textAnchor: 'middle',
            fontSize: 10,
            fill: '#333',
          }}
        />
        <AxisLeft
          top={margin.top}
          left={margin.left}
          scale={valueScale}
          stroke="#333"
          tickStroke="#333"
          tickLabelProps={{
            textAnchor: 'end',
            fontSize: 10,
            fill: '#333',
          }}
        />
        {/* Legend */}
        <Group left={width - 120} top={20}>
          {keys.map((key, i) => (
            <Group key={key} top={i * 20}>
              <rect width={15} height={15} fill={colorScale(key)} />
              <text x={20} y={12} fontSize={12} fill="#333">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </text>
            </Group>
          ))}
        </Group>
      </svg>
    </div>
  );
};

export default VisxChart; 