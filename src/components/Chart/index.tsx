import React from 'react';

import { ChartData, ChartLine } from 'model';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Container } from './styles';

interface ChartProps {
  chartData: ChartData
  chartLines: Array<ChartLine>
}

function Chart({ chartData, chartLines }: ChartProps) {
  return (
    <Container>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeOpacity={0.2} />
          <XAxis
            domain={['dataMin', 'dataMax']}
            hide
          />
          <YAxis tickCount={0} />
          <Tooltip />
          <Legend />
          {
            chartLines?.map((line) => (
              <Line
                strokeWidth={2}
                key={line.id}
                type="monotone"
                dataKey={line.id}
                stroke={line.color}
                dot={false}
                connectNulls
              />
            ))
          }
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default Chart;
