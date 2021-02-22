import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

const customRender = (ui: JSX.Element, options?: any) =>
  render(ui, {
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
