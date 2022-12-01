import * as React from 'react';
import { ImageProps } from 'next/image';
import styled from '@emotion/styled';
import { getMediaQuery } from '../../utils/media-query';
import { withTheme } from '@emotion/react';

export const MainVisualRoot = styled.div(() => ({
  position: 'relative',
  marginBottom: '2rem',
  [getMediaQuery('md')]: {
    marginLeft: '7rem',
    marginBottom: '4rem',
  },
}));

export const MainVisualInner = withTheme(
  styled.div(({ theme }) => ({
    overflow: 'hidden',
    width: '100%',
    height: '40vw',
    img: {
      objectFit: 'cover',
    },
    [getMediaQuery('md')]: {
      height: '25rem',
      img: {
        boxShadow: theme.elevation.high,
        borderRadius: `${theme.borderRadius.high} 0 0 ${theme.borderRadius.high}`,
      },
    },
    [getMediaQuery('xl')]: {
      height: '30rem',
    },
  })),
);

export interface MainVisualProps {
  children: React.ReactNode;
}

export const MainVisual: React.FC<MainVisualProps> = (props) => {
  const { children } = props;
  return (
    <MainVisualRoot>
      <MainVisualInner>{children}</MainVisualInner>
    </MainVisualRoot>
  );
};
MainVisualRoot.displayName = 'MainVisual';
