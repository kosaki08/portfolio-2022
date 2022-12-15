import { FC, HTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image';
import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Tilt, { ReactParallaxTiltProps } from 'react-parallax-tilt';
import { getMediaQuery } from '@portfolio-2022/utils';
import { theme } from '@portfolio-2022/theme';
import { useWindowSize } from '../../../hooks';
import { tileConfig } from '../../../tile-config';

const StyledHeader = withTheme(
  styled.header(({ theme }) => ({
    maxWidth: theme.breakPoints.xl,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '3rem',
    [getMediaQuery('md')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingBottom: '6rem',
    },
  })),
);

const Split = styled.div(() => ({
  [getMediaQuery('md')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '2rem',
    alignItems: 'center',
  },
}));

const ImgContainer = withTheme(
  styled.div(({ theme }) => ({
    marginBottom: '1rem',
    img: {
      width: '100%',
      height: 'auto',
    },
    [getMediaQuery('md')]: {
      marginBottom: 0,
      boxShadow: theme.elevation.middle,
      img: {
        borderRadius: theme.borderRadius.middle,
        display: 'block',
      },
    },
    [getMediaQuery('xl')]: {
      borderRadius: theme.borderRadius.high,
    },
  })),
);

const Details = withTheme(
  styled.div(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    h1: {
      fontSize: theme.fontSizes.xLarge,
      paddingBottom: '.5rem',
      lineHeight: 1.25,
    },
    p: {
      paddingBottom: '.125rem',
      fontSize: theme.fontSizes.xSmall,
      color: theme.colorPalettes.grey,
    },
    a: {
      fontSize: theme.fontSizes.xSmall,
      color: theme.colorPalettes.grey,
      textDecoration: 'underline',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    [getMediaQuery('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: theme.borderRadius.high,
      zIndex: 0,
      h1: {
        fontSize: theme.fontSizes.xxLarge,
      },
      p: {
        fontSize: theme.fontSizes.small,
      },
    },
  })),
);

const Span = withTheme(
  styled.span(({ theme }) => ({
    position: 'absolute',
    top: '-3.5rem',
    left: '1rem',
    fontSize: '2.5rem',
    fontFamily: theme.fontFamilies.secondary,
    color: theme.colorPalettes.grey,
    opacity: 0.3,
    [getMediaQuery('md')]: {
      top: 'auto',
      left: 'auto',
      right: '5rem',
      bottom: '-1rem',
      fontSize: 'min(8rem, 10vw)',
      zIndex: -1,
    },
  })),
);

export interface WorksHeaderProps extends HTMLAttributes<HTMLElement> {
  thumbSrc: ImageProps['src'];
  title: string;
  tag: string;
  num: string;
  link?: string;
}

export const WorksHeader: FC<WorksHeaderProps> = (props) => {
  const { thumbSrc, title, tag, link, num, ...rest } = props;
  const { windowWidth } = useWindowSize();
  const tiltProps: ReactParallaxTiltProps = {
    ...tileConfig,
    tiltEnable: windowWidth > theme.breakPoints.md,
  };

  return (
    <StyledHeader {...rest}>
      <Split>
        <Tilt {...tiltProps}>
          <ImgContainer>
            <Image src={thumbSrc} alt={title} />
          </ImgContainer>
        </Tilt>
        <Details>
          <Span>{num}</Span>
          <h1>{title}</h1>
          <p>{tag}</p>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
          )}
        </Details>
      </Split>
    </StyledHeader>
  );
};
WorksHeader.displayName = 'WorksHeader';
