import { Global, Theme } from '@emotion/react';
import { Interpolation } from '@emotion/styled';
import { Montserrat, Noto_Sans_JP, Fjalla_One } from '@next/font/google';
import { theme } from '@portfolio-2022/theme';
import { getMediaQuery } from '@portfolio-2022/utils';
import { FC } from 'react';

const montserrat = Montserrat({ subsets: ['latin'], weight: '600', display: 'swap' });
const noto_sans_jp = Noto_Sans_JP({ subsets: ['japanese'], weight: '400', display: 'swap' });
const fjalla = Fjalla_One({ subsets: ['latin'], weight: '400', display: 'swap' });

const fontStyles: Interpolation<Theme> = `
  :root {
    --font-noto-sans: ${noto_sans_jp.style.fontFamily};
    --font-montserrat: ${montserrat.style.fontFamily};
    --font-fjalla: ${fjalla.style.fontFamily};
 }`;

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
  'p, li, a': {
    fontSize: theme.fontSizes.xSmall,
    lineHeight: 1.75,
    [getMediaQuery('md')]: {
      fontSize: theme.fontSizes.small,
    },
  },
  li: {
    listStyleType: 'none',
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  p: {
    paddingBottom: '1rem',
  },
  '::selection': {
    backgroundColor: theme.colorPalettes.accent,
    color: theme.colorPalettes.greyMinusTwo,
  },
});

const helper: Interpolation<Theme> = () => ({
  '.hidden': {
    display: 'none',
  },
  '.visible': {
    display: 'inline',
  },
  [getMediaQuery('md')]: {
    '.hidden': {
      display: 'inline',
    },
    '.visible': {
      display: 'none',
    },
  },
});

export const DefaultStyle: FC = () => {
  return <Global styles={[fontStyles, defaultStyles, helper]} />;
};
DefaultStyle.displayName = 'DefaultStyle';
