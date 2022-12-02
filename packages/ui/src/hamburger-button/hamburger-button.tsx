import * as React from 'react';
import { FC, HTMLAttributes } from 'react';
import { Root, Lines } from './elements';

export const BUTTON_HEIGHT = 22 / 16;
export const BUTTON_WIDTH = BUTTON_HEIGHT * 1.618;

export interface HamburgerMenuProps extends HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

export const HamburgerButton: FC<HamburgerMenuProps> = (props) => {
  const { isOpen } = props;
  return (
    <Root {...props}>
      {Array.from({ length: 3 }).map((_, v) => (
        <Lines key={v} isOpen={isOpen} />
      ))}
    </Root>
  );
};
