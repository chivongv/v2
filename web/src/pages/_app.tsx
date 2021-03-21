import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import '@styles/globals.css';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ThemeProvider defaultTheme="dark">
      <AnimatePresence>
        <motion.div key={router.route} exit={{ opacity: 0 }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default MyApp;
