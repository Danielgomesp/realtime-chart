import isWithinTheMaxValue from '..';

describe('isWithinTheMaxValue', () => {
  it('Should return true for 99', () => {
    const result = isWithinTheMaxValue(99);
    expect(result).toBe(true);
  });
  it('Should return false for 101', () => {
    const result = isWithinTheMaxValue(101);
    expect(result).toBe(false);
  });
  it('Should return true for 100', () => {
    const result = isWithinTheMaxValue(100);
    expect(result).toBe(true);
  });
});
