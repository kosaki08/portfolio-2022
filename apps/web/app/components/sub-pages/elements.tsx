import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { getMediaQuery } from '@portfolio-2022/utils';

export const Main = styled.main(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
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

export const Contents = withTheme(
  styled.div(({ theme }) => ({
    '.introduction': {
      paddingBottom: '3rem',
      [getMediaQuery('md')]: {
        paddingBottom: '6rem',
      },
    },
    h2: {
      paddingBottom: '.5rem',
      fontSize: theme.fontSizes.large,
      '&:not(:first-of-type)': {
        paddingTop: '1.5rem',
      },
    },
    li: {
      fontSize: theme.fontSizes.small,
      lineHeight: 1.75,
      listStyleType: 'circle',
    },
  })),
);
