import { FC, Fragment, useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { RecoilRoot, useRecoilState } from 'recoil';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { AnimatePresence } from 'framer-motion';
import { Leva } from 'leva';
import { theme } from '@portfolio-2022/theme';
import { DefaultStyle } from '../app/components/default-style';
import { NavLinks } from '../app/components/nav-links';
import { HamburgerMenu } from '../app/components/hamburger-menu';
import { SiteTitle } from '../app/components/site-title';
import { myName } from '../app/constants';
import { BGLines } from '../app/components/bg-lines';
import { ParticleModel } from '../app/components/particle-model';
import { GlobalState } from '../app/atoms';

const emotionCache = createCache({ key: 'css', prepend: true });

const portal = typeof document !== 'undefined' && document.createElement('div');
if (portal) {
  portal.id = 'portal';
  document.body.appendChild(portal);
}

export default function App(props: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <AppComponents {...props} />
          <ParticleModel />
          <Leva collapsed hidden />
        </RecoilRoot>
      </ThemeProvider>
    </CacheProvider>
  );
}

const AppComponents: FC<AppProps> = ({ Component, pageProps }) => {
  const { asPath } = useRouter();
  const router = useRouter();
  const [, setGlobalState] = useRecoilState(GlobalState);

  useEffect(() => {
    const exitingFunction = () => {
      setGlobalState((prev) => ({ ...prev, isTransition: false }));
    };
    router.events.on('routeChangeStart', exitingFunction);

    return function cleanup() {
      router.events.off('routeChangeStart', exitingFunction);
    };
  }, []);

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => {
        window.scrollTo(0, 0);
        setGlobalState((prev) => ({ ...prev, isTransition: true }));
      }}
    >
      <Fragment key={asPath}>
        <DefaultStyle />
        <Component {...pageProps} />
        <SiteTitle>{myName}</SiteTitle>
        <NavLinks />
        <HamburgerMenu />
        <BGLines />
      </Fragment>
    </AnimatePresence>
  );
};
