import { FC, Fragment, useCallback } from 'react';
import { HamburgerButton } from '@portfolio-2022/ui';
import { NavList } from './nav-list';
import { useRecoilState } from 'recoil';
import { GlobalState } from '../../atoms';

export const HamburgerMenu: FC = () => {
  const [globalState, setGlobalState] = useRecoilState(GlobalState);
  const { isMenuOpen } = globalState;

  const onClickCallback = useCallback(() => {
    setGlobalState((prev) => ({ ...prev, isMenuOpen: !prev.isMenuOpen }));
  }, []);

  return (
    <Fragment>
      <HamburgerButton onClick={onClickCallback} isOpen={isMenuOpen} />
      {isMenuOpen && <NavList onClickItem={onClickCallback} />}
    </Fragment>
  );
};
HamburgerMenu.displayName = 'HamburgerMenu';
