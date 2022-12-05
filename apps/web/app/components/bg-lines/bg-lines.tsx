import { Interpolation } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@portfolio-2022/theme';
import { getMediaQuery } from '@portfolio-2022/utils';
import { FC } from 'react';

const Root = styled.div(() => ({
  position: 'fixed',
  inset: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
}));

const base: Interpolation<{}> = () => ({
  position: 'absolute',
  width: 1,
  height: '100%',
  backgroundColor: theme.colorPalettes.greyPlusThree,
  overflow: 'hidden',
});

const each: Interpolation<{}> = () =>
  Array.from({ length: 5 }).map((_, i) => ({
    [`&:nth-of-type(${i})`]: {
      left: `${i * 25}%`,
      display: i !== 4 ? 'block' : 'none',
      [getMediaQuery('md')]: {
        left: `${i * 20}%`,
        display: 'block',
      },
    },
  }));

const Line = styled.div([base, each]);

export const BGLines: FC = () => (
  <Root>
    {Array.from({ length: 4 }).map((_, v) => (
      <Line key={v} />
    ))}
  </Root>
);
