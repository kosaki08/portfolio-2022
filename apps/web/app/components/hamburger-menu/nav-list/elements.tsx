import { FC, ReactNode } from 'react';
import { Interpolation, withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Link, { LinkProps } from 'next/link';
import { getMediaQuery } from '@portfolio-2022/utils';
import { theme } from '@portfolio-2022/theme';

export const Nav = withTheme(
  styled.nav(({ theme }) => ({
    position: 'fixed',
    inset: 0,
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    gridColumnGap: '1rem',
    textAlign: 'center',
    backdropFilter: 'blur(80px)',
    zIndex: theme.zIndexes.high,
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundColor: theme.colorPalettes.black,
      opacity: 0.25,
      zIndex: -1,
    },
  })),
);

const base: Interpolation<{}> = () => ({
  display: 'block',
  padding: '1rem',
  fontSize: theme.fontSizes.xLarge,
  fontFamily: theme.fontFamilies.secondary,
  textTransform: 'uppercase',
  transition: `transform ${theme.animationDuration.default} ${theme.animationTimingFunction.default}`,
  [getMediaQuery('md')]: {
    fontSize: theme.fontSizes.xxLarge,
  },
});

const hover: Interpolation<{}> = () => ({
  '&:hover': {
    transform: 'scale(1.125)',
  },
});

const Div = styled.div(base);
const StyledLink = withTheme(styled(Link)([base, hover]));

export interface TextWrapperProps extends LinkProps {
  isCurrent: boolean;
  children?: ReactNode;
}

export const TextWrapper: FC<TextWrapperProps> = (props) => {
  const { isCurrent, children, ...rest } = props;
  return isCurrent ? <Div>{children}</Div> : <StyledLink {...rest}>{children}</StyledLink>;
};
