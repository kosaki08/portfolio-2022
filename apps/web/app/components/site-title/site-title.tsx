import { FC } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { withTheme } from '@emotion/react';
import { getMediaQuery } from '@portfolio-2022/utils';

export const Root = withTheme(
  styled.header(({ theme }) => ({
    position: 'fixed',
    top: '2rem',
    left: '1rem',
    zIndex: theme.zIndexes.high,
    mixBlendMode: 'difference',
    [getMediaQuery('sm')]: {
      fontSize: `min(100%, ${theme.fontSizes.large})`,
      left: '50%',
      transform: 'translateX(-50%)',
    },
    [getMediaQuery('md')]: {
      top: '2.5rem',
    },
  })),
);

export const H1 = withTheme(
  styled.h1(({ theme }) => ({
    fontSize: theme.fontSizes.small,
    letterSpacing: theme.letterSpacings.title.pc,
    textTransform: 'uppercase',
    a: {
      display: 'inline-block',
      textDecoration: 'none',
    },
    [getMediaQuery('sm')]: {
      fontSize: `min(100%, ${theme.fontSizes.large})`,
    },
    [getMediaQuery('md')]: {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)',
        height: 2,
        width: 0,
        backgroundColor: theme.colorPalettes.white,
        transition: `width ${theme.animationDuration.slow} ${theme.animationTimingFunction.default}`,
      },
      '&:hover::before': {
        width: '100%',
      },
    },
  })),
);

export interface TitleProps {
  children: string;
}

export const SiteTitle: FC<TitleProps> = (props) => {
  const { children } = props;
  return (
    <Root>
      <H1>
        <Link href="/">{children}</Link>
      </H1>
    </Root>
  );
};
SiteTitle.displayName = 'SiteTitle';
