import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';

import theme from '../styles/theme';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
