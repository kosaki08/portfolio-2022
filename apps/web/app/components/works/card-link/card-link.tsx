import { FC } from 'react';
import Link from 'next/link';
import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { getMediaQuery } from '@portfolio-2022/utils';
import Image, { ImageProps } from 'next/image';

const ImageWrapper = withTheme(
  styled.div(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '32vw',
    marginBottom: '.5rem',
    boxShadow: theme.elevation.middle,
    borderRadius: theme.borderRadius.middle,
    transition: `all .5s ${theme.animationTimingFunction.default}`,
    overflow: 'hidden',
    img: {
      objectFit: 'cover',
      transition: `transform ${theme.animationDuration.sleepy} ${theme.animationTimingFunction.default}`,
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    '&:hover': {
      boxShadow: theme.elevation.low,
      transition: `all .5s ${theme.animationTimingFunction.default}`,
    },
    [getMediaQuery('md')]: {
      height: '20rem',
      marginBottom: '1rem',
    },
  })),
);

const H3 = withTheme(
  styled.h3(({ theme }) => ({
    paddingBottom: '.25rem',
    fontSize: theme.fontSizes.small,
    [getMediaQuery('md')]: {
      fontSize: theme.fontSizes.regular,
    },
  })),
);

const Tag = withTheme(
  styled.span(({ theme }) => ({
    color: theme.colorPalettes.greyMinusOne,
    fontSize: theme.fontSizes.xSmall,
  })),
);

export interface CardLinkProps {
  href: string;
  title: string;
  tag: string;
  thumbSrc: ImageProps['src'];
}

export const CardLink: FC<CardLinkProps> = (props) => {
  const { href, title, tag, thumbSrc } = props;
  return (
    <div>
      <Link href={href}>
        <ImageWrapper>
          <Image
            src={thumbSrc}
            alt={title}
            sizes="100vw"
            fill
            style={{
              objectPosition: '50% 70%',
            }}
          />
        </ImageWrapper>
      </Link>
      <H3>
        <Link href={href}>{title}</Link>
      </H3>
      <Tag>{tag}</Tag>
    </div>
  );
};
CardLink.displayName = 'CardLink';
