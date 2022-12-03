import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { getMediaQuery } from '@portfolio-2022/utils';

export const WorkItem = styled.li(() => ({
  '&:not(:last-of-type)': {
    paddingBottom: '3rem',
    [getMediaQuery('md')]: {
      paddingBottom: '4rem',
    },
  },
}));

export const ContentWrapper = withTheme(
  styled.div(({ theme }) => ({
    'p, p>img': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    'p:not(.img):not(.img-full)': {
      maxWidth: theme.breakPoints.sm,
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
    'p.img, p.img-full': {
      marginBottom: '3rem',
      img: {
        display: 'block',
        boxShadow: theme.elevation.middle,
      },
    },
    'p.img img': {
      maxWidth: `min(100%, ${theme.breakPoints.lg}px)`,
    },
    'p.img-full img': {
      width: '100%',
    },
    [getMediaQuery('md')]: {
      'p:not(.img):not(.img-full)': {
        maxWidth: theme.breakPoints.md,
      },
      'p.img, p.img-full': {
        marginBottom: '9rem',
        img: {
          boxShadow: theme.elevation.high,
        },
      },
    },
    [getMediaQuery('lg')]: {
      'p.img img': {
        borderRadius: theme.borderRadius.middle,
      },
    },
  })),
);
