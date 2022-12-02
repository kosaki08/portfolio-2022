import { FC, Fragment, useCallback, useState } from 'react';
import { HamburgerButton } from '@portfolio-2022/ui';
import { NavList } from './nav-list';

export const HamburgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickHamburger = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <Fragment>
      <HamburgerButton onClick={onClickHamburger} isOpen={isOpen} />
      {isOpen && <NavList onClickItem={() => setIsOpen(false)} />}
    </Fragment>
  );
};
HamburgerMenu.displayName = 'HamburgerMenu';
