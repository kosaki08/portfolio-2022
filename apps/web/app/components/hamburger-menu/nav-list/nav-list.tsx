import { Portal } from '@portfolio-2022/ui';
import { FC } from 'react';
import { LinkItem } from '../../nav-links';
import { Nav } from './elements';
import { NavItem } from './nav-item';

const links: LinkItem[] = [
  { to: '/', text: 'Home' },
  { to: '/works', text: 'Works' },
  { to: '/about', text: 'About' },
  { to: '/contact', text: 'Contact' },
];

export type OnClickItemCallbackArgs = { to: string; text: string };
export type OnClickItemCallback = (args: OnClickItemCallbackArgs) => void;

export interface NavListProps {
  onClickItem?: OnClickItemCallback;
}

export const NavList: FC<NavListProps> = (props) => {
  return (
    <Portal>
      <Nav>
        <ul>
          {links.map((link) => (
            <NavItem key={link.to} link={link} onClickItem={props.onClickItem} />
          ))}
        </ul>
      </Nav>
    </Portal>
  );
};
NavList.displayName = 'NavList';
