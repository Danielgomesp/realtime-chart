import { dateImp } from 'adapters';
import { removeDataOlderThan } from 'core';
import { ChartData, ChartDot } from 'model';

export default function createChartData(
  chartDot: ChartDot | undefined,
  chartData: ChartData = [],
): ChartData {
  if (!chartData) return [];

  const clearedChartData = removeDataOlderThan(chartData, dateImp());

  return [...clearedChartData, chartDot];
}
