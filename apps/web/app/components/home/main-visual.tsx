import { FC } from 'react';
import Image from 'next/image';
import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Tilt, { ReactParallaxTiltProps } from 'react-parallax-tilt';
import { theme } from '@portfolio-2022/theme';
import { useWindowSize } from '../../hooks';
import imgSrc from '../../assets/images/home/main_visual.jpg';
import { tileConfig } from '../../tile-config';

const Root = withTheme(
  styled.div(({ theme }) => ({
    '&>div': {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
    },
    [`@media (min-width: ${theme.breakPoints.sm}px) and (min-height: ${theme.breakPoints.sm}px)`]: {
      '&>div': {
        top: '7rem',
        left: '7rem',
        width: 'calc(100vw - 7rem)',
        height: 'calc(100vh - 7rem - 5rem)',
        boxShadow: theme.elevation.high,
        borderRadius: theme.borderRadius.high,
      },
    },
  })),
);

const ImgContainer = styled.div(() => ({
  img: {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
  },
  [`@media (min-width: ${theme.breakPoints.sm}px) and (min-height: ${theme.breakPoints.sm}px)`]: {
    img: {
      objectPosition: '60% 90%',
      marginTop: '-7rem',
      marginLeft: '-3rem',
    },
  },
  [`@media (min-width: ${theme.breakPoints.md}px) and (min-height: ${theme.breakPoints.sm}px)`]: {
    img: {
      objectPosition: '50% 50%',
      marginTop: '-12rem',
      marginLeft: '-7rem',
    },
  },
}));

export const MainVisual: FC = () => {
  const { windowWidth } = useWindowSize();
  const tiltProps: ReactParallaxTiltProps = {
    ...tileConfig,
    tiltEnable: windowWidth > theme.breakPoints.md,
  };

  return (
    <Root>
      <Tilt {...tiltProps}>
        <ImgContainer>
          <Image src={imgSrc} alt="Home" />
        </ImgContainer>
      </Tilt>
    </Root>
  );
};
