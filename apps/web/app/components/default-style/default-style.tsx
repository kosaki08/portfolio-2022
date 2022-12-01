import { Global, Theme } from '@emotion/react';
import { Interpolation } from '@emotion/styled';
import { FC } from 'react';
import { theme } from '../../theme';

const defaultStyles: Interpolation<Theme> = () => ({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'html,body': {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
  },
  body: {
    fontSize: theme.fontSizes.regular,
    fontFamily: theme.fontFamilies.default,
    color: theme.colorPalettes.greyMinusTwo,
    backgroundColor: theme.colorPalettes.greyPlusTwo,
    lineHeight: 1.5,
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  h1: {
    fontFamily: theme.fontFamilies.primary,
  },
  a: {
    color: theme.colorPalettes.greyMinusTwo,
    textDecoration: 'none',
  },
  li: {
    listStyleType: 'none',
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  p: {
    fontSize: theme.fontSizes.small,
    lineHeight: 1.75,
    paddingBottom: '1rem',
  },
});

const home: Interpolation<Theme> = () => ({
  'body.home': {
    overflow: 'hidden',
  },
});

export const DefaultStyle: FC = () => {
  return <Global styles={[defaultStyles, home]} />;
};
DefaultStyle.displayName = 'DefaultStyle';
