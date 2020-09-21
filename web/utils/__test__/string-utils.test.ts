import { toCapitalize } from '../string-utils';

describe('String utils', () => {
  test('Expects null/undefined to be null', () => {
    expect(toCapitalize(null)).toBeNull();
    expect(toCapitalize(undefined)).toBeNull();
  });

  test('Expects string "hello" to be "Hello"', () => {
    expect(toCapitalize('hello')).toBe('Hello');
  });

  test('Expects string "!not valid" to be "!not valid"', () => {
    expect(toCapitalize('!not valid')).toBe('!not valid');
  });
});
