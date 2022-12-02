import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { AppProps } from 'next/app';
import { DefaultStyle } from '../app/components/default-style';
import { theme } from '@portfolio-2022/theme';

const emotionCache = createCache({ key: 'css', prepend: true });

const portal = typeof document !== 'undefined' && document.createElement('div');
if (portal) {
  portal.id = 'portal';
  document.body.appendChild(portal);
}

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
