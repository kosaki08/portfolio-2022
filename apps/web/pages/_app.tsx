import { Fragment } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { AnimatePresence } from 'framer-motion';
import { theme } from '@portfolio-2022/theme';
import { DefaultStyle } from '../app/components/default-style';
import { NavLinks } from '../app/components/nav-links';
import { HamburgerMenu } from '../app/components/hamburger-menu';
import { SiteTitle } from '../app/components/site-title';
import { myName } from '../app/constants';
import BGLines from '../app/components/bg-lines/bg-lines';
import { ParticleModel } from '../app/components/particle-model';

const emotionCache = createCache({ key: 'css', prepend: true });

const portal = typeof document !== 'undefined' && document.createElement('div');
if (portal) {
  portal.id = 'portal';
  document.body.appendChild(portal);
}

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const { asPath } = useRouter();

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
          <Fragment key={asPath}>
            <DefaultStyle />
            <Component {...pageProps} />
            <SiteTitle>{myName}</SiteTitle>
            <NavLinks />
            <HamburgerMenu />
            <BGLines />
          </Fragment>
        </AnimatePresence>
        <ParticleModel />
      </ThemeProvider>
    </CacheProvider>
  );
}
