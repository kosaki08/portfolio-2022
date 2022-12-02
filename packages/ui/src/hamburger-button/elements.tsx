import { withTheme, styled, Interpolation, Theme } from '@portfolio-2022/theme';
import { getMediaQuery } from '@portfolio-2022/utils';
import { BUTTON_HEIGHT, BUTTON_WIDTH } from './hamburger-button';

interface StyleProps {
  theme: Theme;
  isOpen: boolean;
}

export const Button = withTheme(
  styled.button<StyleProps>(
    ({ theme }) => ({
      position: 'fixed',
      top: '2rem',
      right: '1rem',
      height: `${BUTTON_HEIGHT}rem`,
      width: `${BUTTON_WIDTH}rem`,
      cursor: 'pointer',
      zIndex: theme.zIndexes.higher,
      '&:focus': {
        outline: 'none',
      },
      [getMediaQuery('md')]: {
        top: '2.5rem',
        right: '2.5rem',
      },
    }),
    ({ isOpen, theme }) =>
      !isOpen
        ? {
            '&:hover span': {
              width: '100%',
            },
          }
        : {
            transition: `transform ${theme.animationDuration.default} ${theme.animationTimingFunction.default}`,
            '&:hover': {
              transform: 'scale(.9)',
            },
          },
  ),
);

const LineBase: Interpolation<StyleProps> = ({ theme }) => ({
  position: 'absolute',
  right: 0,
  height: '.125rem',
  backgroundColor: theme.colorPalettes.white,
  borderRadius: 1,
  transition: `all ${theme.animationDuration.default} ${theme.animationTimingFunction.default}`,
  transformOrigin: 'center center',
  '&:hover': {
    '&:first-of-type, &:last-of-type': {
      width: '100%',
    },
  },
});

const LineClosed: Interpolation<StyleProps> = ({ isOpen }) =>
  !isOpen
    ? {
        '&:first-of-type': {
          top: 0,
          width: '100%',
        },
        '&:nth-of-type(2)': {
          top: '.5rem',
          width: 'calc(100% - .5rem)',
        },
        '&:last-of-type': {
          top: '1rem',
          width: 'calc(100% - 1rem)',
        },
      }
    : {};

const LineOpened: Interpolation<StyleProps> = ({ isOpen }) =>
  isOpen
    ? {
        '&:first-of-type': {
          top: '50%',
          width: '100%',
          transform: 'rotate(225deg)',
        },
        '&:nth-of-type(2)': {
          width: 0,
        },
        '&:last-of-type': {
          top: '50%',
          width: '100%',
          transform: 'rotate(135deg)',
        },
      }
    : {};

export const Span = withTheme(styled.span([LineBase, LineClosed, LineOpened]));
