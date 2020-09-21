import { formatDate } from '../datetime-utils';

describe('Datetime utils', () => {
  test('Expects null/undefined to be null', () => {
    expect(formatDate(null)).toBeNull();
    expect(formatDate(undefined)).toBeNull();
  });

  test('Expects date as number 1600684311216 to be 2020-09-21', () => {
    expect(formatDate(1600684311216)).toBe('2020-09-21');
  });

  test('Expects Date.now() to be 2020-09-21', () => {
    expect(formatDate(Date.now())).toBe('2020-09-21');
  });

  test('Expects new Date() to be 2020-09-21', () => {
    expect(formatDate(new Date('2020-09-21'))).toBe('2020-09-21');
  });

  test('Expect ISO-string date to be 2020-09-21', () => {
    const isoDate = new Date('2020-09-21').toISOString();
    expect(formatDate(isoDate)).toBe('2020-09-21');
  });
});
