import { theme } from '@portfolio-2022/theme';
import { BreakPoint } from '@portfolio-2022/theme/@types/emotion';

type Target = 'min-width' | 'min-height' | 'max-width' | 'max-height';

export const getMediaQuery = (breakPoint: BreakPoint, target: Target = 'min-width'): string => {
  switch (breakPoint) {
    case 'xl':
      return `@media (${target}: ${theme.breakPoints.xl}px)`;
    case 'lg':
      return `@media (${target}: ${theme.breakPoints.lg}px)`;
    case 'md':
      return `@media (${target}: ${theme.breakPoints.md}px)`;
    case 'sm':
      return `@media (${target}: ${theme.breakPoints.sm}px)`;
    default:
      throw new Error('Invalid breakpoint');
  }
};
