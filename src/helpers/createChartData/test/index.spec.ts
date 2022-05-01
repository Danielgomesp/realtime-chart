import createChartData from '..';
import { chartDot, expectedResult, previousChartData } from './mock';

describe('createChartData', () => {
  it('Should return an array of chartDot', () => {
    const result = createChartData(chartDot, previousChartData);
    expect(result).toEqual(expectedResult);
  });
  it('Should return an array with only one chartDot', () => {
    const result = createChartData(chartDot, []);
    expect(result).toEqual([chartDot]);
  });
  it('Should return an array with only one chartDot', () => {
    const result = createChartData(chartDot);
    expect(result).toEqual([chartDot]);
  });
});
