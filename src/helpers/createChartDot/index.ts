import { isWithinTheMaxValue } from 'core';
import { ChartDot, Product } from 'model';

// type receivedData
export default function createChartDot(
  data: Array<Product> | undefined,
): ChartDot | undefined {
  if (!data) return undefined;

  const newObj: ChartDot = {};

  data.forEach((item) => {
    if (!isWithinTheMaxValue(item.data)) return;

    newObj[item.id] = item.data;
    newObj.timestamp = item.timestamp;
  });

  return newObj;
}
