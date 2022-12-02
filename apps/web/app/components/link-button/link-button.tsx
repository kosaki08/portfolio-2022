import { FC, ReactNode } from 'react';
import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Link, { LinkProps } from 'next/link';
import { getMediaQuery } from '@portfolio-2022/utils';

const StyledLink = withTheme(
  styled(Link)(({ theme }) => ({
    padding: '.4rem 1.5rem',
    fontSize: theme.fontSizes.xSmall,
    fontfamily: theme.fontFamilies.primary,
    textTransform: 'uppercase',
    letterSpacing: 4,
    background: 'linear-gradient(#fff 0 0) bottom/100% 0% no-repeat',
    border: `1px solid ${theme.colorPalettes.greyMinusTwo}`,
    cursor: 'pointer',
    transition: `${theme.animationDuration.default} ${theme.animationTimingFunction.default}`,
    '&:hover': {
      color: theme.colorPalettes.greyPlusTwo,
      background: 'linear-gradient(#fff 0 0) bottom/100% 100% no-repeat',
    },
    [getMediaQuery('md')]: {
      padding: '.5rem 2rem',
      fontSize: theme.fontSizes.small,
    },
  })),
);

export interface ButtonProps extends LinkProps {
  children?: ReactNode;
}

export const LinkButton: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return <StyledLink {...rest}>{children}</StyledLink>;
};
LinkButton.displayName = 'LinkButton';
