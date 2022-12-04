import { Theme } from '@emotion/react';

const fontSizes: Theme['fontSizes'] = {
  xxxLarge: '2.25rem',
  xxLarge: '1.875rem',
  xLarge: '1.5rem',
  large: '1.125rem',
  regular: '1rem',
  small: '.875rem',
  xSmall: '.75rem',
  xxSmall: '.625rem',
};

const fontFamilies: Theme['fontFamilies'] = {
  default: `var(--font-noto-sans), var(--font-montserrat), sans-serif`,
  primary: `var(--font-montserrat), var(--font-noto-sans), sans-serif`,
  secondary: `var(--font-fjalla), var(--font-noto-sans), sans-serif`,
};

const letterSpacings: Theme['letterSpacings'] = {
  title: { sp: '4px', pc: '7px' },
};

const colorPalettes: Theme['colorPalettes'] = {
  white: '#ffffff',
  greyMinusTwo: '#D1D5D8',
  greyMinusOne: '#888888',
  grey: '#4A4A4A',
  greyPlusOne: '#212121',
  greyPlusTwo: '#1f1f1f',
  greyPlusThree: '#1b1b1b',
  black: '#000000',
};

const zIndexes: Theme['zIndexes'] = {
  highest: 99,
  higher: 50,
  high: 40,
  middle: 20,
  low: 10,
};

const elevation: Theme['elevation'] = {
  high: 'rgb(0 0 0 / 20%) 0px 2px 15px, rgb(0 0 0 / 30%) 0px 3px 30px, rgb(0 0 0 / 50%) 0px 30px 40px',
  middle: '0 25px 50px -12px rgb(0 0 0 / 35%)',
  low: '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
};

const borderRadius: Theme['borderRadius'] = {
  middle: '8px',
  high: '12px',
};

const breakPoints: Theme['breakPoints'] = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const animationDuration: Theme['animationDuration'] = {
  default: '200ms',
  slow: '500ms',
  sleepy: '1s',
};

const animationTimingFunction: Theme['animationTimingFunction'] = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  linear: 'linear',
};

export const theme: Theme = {
  name: 'Default Theme',
  fontSizes,
  fontFamilies,
  letterSpacings,
  colorPalettes,
  zIndexes,
  elevation,
  borderRadius,
  breakPoints,
  animationDuration,
  animationTimingFunction,
};

export type { Theme };
