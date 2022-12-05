import { FC, Fragment, useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { RecoilRoot, useRecoilState } from 'recoil';
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
import { particlesState } from '../app/atoms';

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
        </RecoilRoot>
      </ThemeProvider>
    </CacheProvider>
  );
}

const AppComponents: FC<AppProps> = ({ Component, pageProps }) => {
  const { asPath } = useRouter();
  const router = useRouter();
  const [, setParticles] = useRecoilState(particlesState);

  useEffect(() => {
    const exitingFunction = () => {
      setParticles((prev) => ({ ...prev, isShow: false }));
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
        setParticles((prev) => ({ ...prev, isShow: true }));
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
