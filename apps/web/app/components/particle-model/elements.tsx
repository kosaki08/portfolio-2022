import { styled, theme, withTheme } from '@portfolio-2022/theme';

export const Root = withTheme(
  styled.div<{ isTransition: boolean; isMenuOpen: boolean }>(({ isTransition, isMenuOpen }) => ({
    position: 'fixed',
    inset: 0,
    zIndex: isTransition ? theme.zIndexes.highest : isMenuOpen ? theme.zIndexes.high + 1 : -1,
    pointerEvents: 'none',
    '&::before': {
      content: '""',
      position: 'fixed',
      inset: 0,
      background: isTransition ? 'radial-gradient(circle, rgb(27 4 26) 0%, rgb(25 1 1) 100%)' : 'none',
      zIndex: -1,
    },
  })),
);
