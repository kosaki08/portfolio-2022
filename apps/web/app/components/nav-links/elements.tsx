import { Interpolation, Theme, withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@portfolio-2022/theme';

interface StyleProps {
  theme: Theme;
}

const Base: Interpolation<StyleProps> = () => ({
  position: 'relative',
  zIndex: theme.zIndexes.middle,
});

const Sides: Interpolation<StyleProps> = () => ({
  "[data-link='works'], [data-link='contact']": {
    top: '50%',
    transform: 'translateY(-50%)',
    '&::before': {
      top: '50%',
      transform: 'translateY(-50%)',
      width: '1.5rem',
      height: 1,
      transition: `width ${theme.animationDuration.default} ${theme.animationTimingFunction.default}`,
    },
    '&:hover::before': {
      width: '2.2rem',
    },
  },
});

const Works: Interpolation<StyleProps> = () => ({
  "[data-link='works']": {
    right: '2.5rem',
    '&::before': {
      right: '-2.5rem',
    },
  },
});

const Contact: Interpolation<StyleProps> = () => ({
  "[data-link='contact']": {
    left: '2.5rem',
    '&::before': {
      left: '-2.5rem',
    },
  },
});

const About: Interpolation<StyleProps> = () => ({
  "[data-link='about']": {
    bottom: '1.5rem',
    right: '2.5rem',
    '&::before': {
      top: '-4rem',
      left: '50%',
      height: '2rem',
      width: 1,
      transform: 'translateX(-50%)',
      transition: `height ${theme.animationDuration.default} ${theme.animationTimingFunction.default}`,
    },
    '&:hover::before': {
      height: '3rem',
    },
  },
});

export const Aside = withTheme(styled.aside([Base, Sides, Works, Contact, About]));

export const Li = withTheme(
  styled.li(({ theme }) => ({
    position: 'fixed',
    writingMode: 'vertical-rl',
    textTransform: 'uppercase',
    fontFamily: theme.fontFamilies.secondary,
    letterSpacing: '.05em',
    a: {
      fontSize: theme.fontSizes.regular,
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      backgroundColor: theme.colorPalettes.white,
    },
  })),
);
