import { FC } from 'react';
import { Portal } from '@portfolio-2022/ui';
import { LinkItem } from '../../nav-links';
import { Nav } from './elements';
import { NavItem } from './nav-item';

const links: LinkItem[] = [
  { href: '/', text: 'Home' },
  { href: '/works', text: 'Works' },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' },
];

export type OnClickItemCallbackArgs = { href: string; text: string };
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
            <NavItem key={link.href} link={link} onClickItem={props.onClickItem} />
          ))}
        </ul>
      </Nav>
    </Portal>
  );
};
NavList.displayName = 'NavList';
