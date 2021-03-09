import { urlForFile } from '../urlForFile';

describe('urlForFile utils', () => {
  test('Expects null/undefined to be null', () => {
    expect(urlForFile(null)).toBeNull();
    expect(urlForFile(undefined)).toBeNull();
  });

  test('Expects string "hello" to be null', () => {
    expect(urlForFile('hello')).toBeNull();
  });

  test('Expects object to returns a valid url', () => {
    const obj = {
      asset: {
        _ref: 'file-testingURL-pdf', //sanity asset id
      },
    };

    expect(urlForFile(obj)).toBe(
      'https://cdn.sanity.io/files/undefined/production/testingURL.pdf',
    );
  });
});
