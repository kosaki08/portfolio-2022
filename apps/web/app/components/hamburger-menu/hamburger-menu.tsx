import { FC, Fragment, useState } from 'react';
import { HamburgerButton } from '@portfolio-2022/ui';
import { NavList } from './nav-list';

export const HamburgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <HamburgerButton onClick={() => setIsOpen((prev) => !prev)} isOpen={isOpen} />
      {isOpen && <NavList onClickItem={() => setIsOpen(false)} />}
    </Fragment>
  );
};
HamburgerMenu.displayName = 'HamburgerMenu';
