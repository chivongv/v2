import { mapCodeLanguages } from '../codeLanguages-utils';

describe('Code Languages utils', () => {
  test('Expects null/undefined to be null', () => {
    expect(mapCodeLanguages(null)).toBeNull();
    expect(mapCodeLanguages(undefined)).toBeUndefined();
  });

  test('Expects css to be CSS', () => {
    expect(mapCodeLanguages('css')).toBe('CSS');
  });

  test('Expects javascript to be JavaScript', () => {
    expect(mapCodeLanguages('javascript')).toBe('JavaScript');
  });

  test('Expects random to be random', () => {
    expect(mapCodeLanguages('random')).toBe('random');
  });
});
