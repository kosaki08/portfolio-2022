import { styled, theme, withTheme } from '@portfolio-2022/theme';

export const Root = withTheme(
  styled.div<{ isTransition: boolean }>(({ isTransition }) => ({
    position: 'fixed',
    inset: 0,
    zIndex: isTransition ? -1 : theme.zIndexes.highest,
    '&::before': {
      content: '""',
      position: 'fixed',
      inset: 0,
      background: !isTransition ? 'radial-gradient(circle, rgba(36,7,38,1) 0%, rgba(28,5,5,1) 100%)' : 'none',
      transition: 'background 3s linear',
      zIndex: -1,
    },
  })),
);
