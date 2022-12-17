import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { getMediaQuery } from '@portfolio-2022/utils';
import { ScrollReveal } from '@portfolio-2022/ui';
import { worksThumb } from '../works-data';
import { WorksPageKey } from '../../../constants';

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
  slug: WorksPageKey;
  title: string;
  tag: string;
}

export const CardLink: FC<CardLinkProps> = (props) => {
  const { href, title, tag, slug } = props;
  const src = worksThumb[slug];

  return (
    <div>
      <ScrollReveal>
        <Link href={href}>
          <ImageWrapper>
            <Image
              src={src}
              alt={title}
              sizes="100vw"
              fill
              style={{
                objectPosition: '50% 70%',
              }}
            />
          </ImageWrapper>
        </Link>
      </ScrollReveal>
      <ScrollReveal>
        <H3>
          <Link href={href}>{title}</Link>
        </H3>
        <Tag>{tag}</Tag>
      </ScrollReveal>
    </div>
  );
};
CardLink.displayName = 'CardLink';
