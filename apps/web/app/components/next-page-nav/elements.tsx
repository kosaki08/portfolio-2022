import Link from 'next/link';
import styled, { Interpolation } from '@emotion/styled';
import { Theme, withTheme } from '@emotion/react';
import { theme } from '@portfolio-2022/theme';
import { getMediaQuery } from '@portfolio-2022/utils';

interface StyleProps {
  theme?: Theme;
}

const base: Interpolation<StyleProps> = () => ({
  position: 'relative',
  display: 'block',
  width: '100%',
  height: '35vw',
  overflow: 'hidden',
  [getMediaQuery('md')]: {
    height: '30rem',
  },
});

const overlay: Interpolation<StyleProps> = () => ({
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.colorPalettes.black,
    opacity: 0.75,
    zIndex: theme.zIndexes.low,
  },
});

const image: Interpolation<StyleProps> = () => ({
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 5s linear',
  },
});

const hover: Interpolation<StyleProps> = () => ({
  '&:hover strong': {
    letterSpacing: '.5rem',
  },
  '&:hover img': {
    transform: 'scale(1.25)',
  },
});

export const StyledLink = styled(Link)([base, image, overlay, hover]);

export const Text = withTheme(
  styled.strong(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontSize: theme.fontSizes.large,
    fontFamily: theme.fontFamilies.secondary,
    textTransform: 'uppercase',
    letterSpacing: '.6rem',
    transition: `letter-spacing ${theme.animationDuration.sleepy} ${theme.animationTimingFunction.default}`,
    transform: 'translate(-50%, -50%)',
    zIndex: theme.zIndexes.middle,
    [getMediaQuery('md')]: {
      fontSize: theme.fontSizes.xLarge,
      letterSpacing: '.8rem',
    },
  })),
);
