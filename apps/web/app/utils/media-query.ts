import { theme } from '@portfolio-2022/theme';
import { BreakPoint } from '../@types/emotion';

export const getMediaQuery = (breakPoint: BreakPoint): string => {
  switch (breakPoint) {
    case 'xl':
      return `@media (min-width: ${theme.breakPoints.xl}px)`;
    case 'lg':
      return `@media (min-width: ${theme.breakPoints.lg}px)`;
    case 'md':
      return `@media (min-width: ${theme.breakPoints.md}px)`;
    case 'sm':
      return `@media (min-width: ${theme.breakPoints.sm}px)`;
    default:
      throw new Error('Invalid breakpoint');
  }
};
