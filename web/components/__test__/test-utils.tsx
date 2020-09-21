import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';
import '@testing-library/jest-dom';
import theme from '../../styles/theme';

const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: JSX.Element, options?: any) =>
  render(ui, {
    wrapper: ThemeWrapper,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
