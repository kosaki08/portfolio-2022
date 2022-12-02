import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { AppProps } from 'next/app';
import { theme } from '@portfolio-2022/theme';
import { DefaultStyle } from '../app/components/default-style';
import { NavLinks } from '../app/components/nav-links';
import { HamburgerMenu } from '../app/components/hamburger-menu';
import { SiteTitle } from '../app/components/site-title';
import { myName } from '../app/constants';

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
        <DefaultStyle />
        <Component {...pageProps} />
        <SiteTitle>{myName}</SiteTitle>
        <NavLinks />
        <HamburgerMenu />
      </ThemeProvider>
    </CacheProvider>
  );
}
