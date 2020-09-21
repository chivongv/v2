import { toCapitalize } from '../string-utils';

describe('String utils', () => {
  test('Expects null to be null', () => {
    expect(toCapitalize(null)).toBe(null);
  });

  test('Expect undefined to be null', () => {
    expect(toCapitalize(undefined)).toBe(null);
  });

  test('Expects string "hello" to be "Hello"', () => {
    expect(toCapitalize('hello')).toBe('Hello');
  });

  test('Expects string "!not valid" to be "!not valid"', () => {
    expect(toCapitalize('!not valid')).toBe('!not valid');
  });
});
