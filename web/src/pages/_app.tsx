import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { globalStyles } from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {globalStyles}
      <ThemeProvider defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
