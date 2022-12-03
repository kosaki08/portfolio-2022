import { FC } from 'react';
import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { getMediaQuery } from '@portfolio-2022/utils';
import { HomeSVGText } from '../sub-pages';

export const Root = styled.div(() => ({
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
}));

export const Contents = withTheme(
  styled.div(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    maxWidth: theme.breakPoints.xl,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 1,
  })),
);

export const Inner = styled.div(() => ({
  display: 'grid',
  gridRowGap: '5vw',
  width: '100%',
  textAlign: 'center',
  marginTop: '25vw',
  a: {
    justifySelf: 'center',
    pointerEvents: 'auto',
  },
  [getMediaQuery('sm')]: {
    gridRowGap: '3rem',
    marginTop: '4rem',
  },
  [getMediaQuery('md')]: {},
}));

export const HelloWorld: FC = () => (
  <SVGWrapper>
    <HomeSVGText />
  </SVGWrapper>
);

const SVGWrapper = styled.div(() => ({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  [getMediaQuery('md')]: {
    width: 'calc(100vw - 10rem)',
  },
  [getMediaQuery('xl')]: {
    width: 'calc(100% - 5rem)',
  },
}));
