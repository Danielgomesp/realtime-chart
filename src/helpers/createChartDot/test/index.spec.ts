import createChartDot from '..';
import { convertedData, receivedData } from './mock';

describe('createChartDot', () => {
  it('to chart format', () => {
    const result = createChartDot(receivedData);
    expect(result).toEqual(convertedData);
  });
  it('to chart format', () => {
    const result = createChartDot(undefined);
    expect(result).toEqual(undefined);
  });
});
