import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { getMediaQuery } from '@portfolio-2022/utils';

export const Main = styled.main(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}));

export const Inner = styled.div(() => ({
  flex: 1,
  paddingTop: '4rem',
  paddingBottom: '4rem',
  [getMediaQuery('md')]: {
    paddingTop: '7rem',
    paddingBottom: '7rem',
  },
}));

export const ContentWrapper = withTheme(
  styled.div(({ theme }) => ({
    maxWidth: theme.breakPoints.sm,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    [getMediaQuery('lg')]: {
      maxWidth: theme.breakPoints.md,
    },
  })),
);

export const WorksContentWrapper = withTheme(
  styled.div(({ theme }) => ({
    paddingLeft: '1rem',
    paddingRight: '1rem',
    img: {
      boxShadow: theme.elevation.high,
    },
    '.introduction': {
      paddingBottom: '3rem',
    },
    '.img, .introduction': {
      maxWidth: theme.breakPoints.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '.img, .img-full': {
      paddingBottom: '3rem',
    },
    '.img img': {
      maxWidth: '100%',
    },
    '.img-full img': {
      width: '100%',
    },
    [getMediaQuery('md')]: {
      padding: 0,
      '.introduction': {
        paddingBottom: '4rem',
      },
      '.img, .img-full': {
        paddingBottom: '6rem',
      },
    },
  })),
);

export const Contents = withTheme(
  styled.div(({ theme }) => ({
    h2: {
      paddingTop: '1rem',
      paddingBottom: '.5rem',
      fontSize: theme.fontSizes.large,
      '&:not(:first-of-type)': {
        paddingTop: '1.5rem',
      },
    },
    ul: {
      marginLeft: '1rem',
    },
    li: {
      lineHeight: 1.75,
      listStyleType: 'circle',
    },
    a: {
      textDecoration: 'underline',
      '&:hover': {
        textDecoration: 'none',
      },
    },
  })),
);

export const Br = styled.br(() => ({
  display: 'none',
  [getMediaQuery('md')]: {
    display: 'block',
  },
}));
