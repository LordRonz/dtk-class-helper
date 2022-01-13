import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

// hotjar config
const [hjid, hjsv] = [2768716, 6];

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (!window.location.host.startsWith('localhost')) {
      hotjar.initialize(hjid, hjsv);
    }

    // Don't increment views if not on main domain
    if (window.location.host !== 'dtk-class.vercel.app') {
      localStorage.setItem('incrementMetaFlag', 'false');
    }
  }, []);

  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
