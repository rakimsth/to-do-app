/* eslint-disable no-undef */
const { dateFormatter } = require('../../utils/dateUtils');

describe('Date Utils Helpers : Date formatter Function', () => {
  // Success Cases
  it('should return string', () => {
    const date = dateFormatter('2022-01-24');
    expect(typeof date).toBe('string');
  });
  it('should return proper date in default format(LLL)', () => {
    const date = dateFormatter('2022-01-24');
    expect(date).toMatch('January 24, 2022 12:00 AM');
  });
  // Failure Cases
  it('should not return default formatted date', () => {
    const date = dateFormatter('2022-01-24', 'LL');
    expect(date).not.toMatch('January 24, 2022 12:00 AM');
  });
});
