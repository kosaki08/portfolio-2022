import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { AppProps } from 'next/app';
import { theme } from '../app/theme';
import { DefaultStyle } from '../app/components/default-style';

const emotionCache = createCache({ key: 'css', prepend: true });

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <DefaultStyle />
      </ThemeProvider>
    </CacheProvider>
  );
}
