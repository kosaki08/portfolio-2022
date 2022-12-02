import * as React from 'react';
import { FC, HTMLAttributes } from 'react';
import { Button, Span } from './elements';

export const BUTTON_HEIGHT = 22 / 16;
export const BUTTON_WIDTH = BUTTON_HEIGHT * 1.618;

export interface HamburgerMenuProps extends HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

export const HamburgerButton: FC<HamburgerMenuProps> = (props) => {
  const { isOpen } = props;
  return (
    <Button {...props}>
      {Array.from({ length: 3 }).map((_, v) => (
        <Span key={v} isOpen={isOpen} />
      ))}
    </Button>
  );
};
