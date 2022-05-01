import { dateImp } from 'adapters';
import removeDataOlderThan from '..';
import { chartData, filteredArray } from './mock';

describe('removeDataOlderThan', () => {
  it('should remove items older than 5 minutes', () => {
    const date = dateImp();
    const result = removeDataOlderThan(chartData, date);
    expect(result).toEqual(filteredArray);
  });
});
