import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { getMediaQuery } from '@portfolio-2022/utils';

export const Nav = withTheme(
  styled.nav(({ theme }) => ({
    position: 'fixed',
    inset: 0,
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    gridColumnGap: '1rem',
    textAlign: 'center',
    backgroundColor: theme.colorPalettes.greyPlusOne,
    zIndex: theme.zIndexes.high,
  })),
);

export const StyledLink = withTheme(
  styled(Link)(({ theme }) => ({
    display: 'block',
    padding: '1rem',
    fontSize: theme.fontSizes.xLarge,
    fontFamily: theme.fontFamilies.secondary,
    textTransform: 'uppercase',
    transition: `transform ${theme.animationDuration.default} ${theme.animationTimingFunction.default}`,
    [getMediaQuery('md')]: {
      fontSize: theme.fontSizes.xxLarge,
    },
    '&:hover': {
      transform: 'scale(1.125)',
    },
  })),
);
