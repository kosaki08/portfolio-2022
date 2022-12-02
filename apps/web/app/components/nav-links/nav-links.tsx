import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { theme } from '@portfolio-2022/theme';
import { useWindowSize } from '../../hooks';
import { Aside, Li } from './elements';

export interface LinkItem {
  to: string;
  text: string;
}

const links: LinkItem[] = [
  { to: '/works', text: 'Works' },
  { to: '/contact', text: 'Contact' },
  { to: '/about', text: 'About' },
];

export const NavLinks: FC = () => {
  const { pathname } = useRouter();
  const { windowWidth } = useWindowSize();

  if (windowWidth < theme.breakPoints.md) {
    return null;
  }

  return (
    <Aside>
      <nav>
        <ul>
          {links.map(
            (link) =>
              (pathname === '/' || link.to !== pathname) && (
                <Li key={link.to} data-link={link.to.replace('/', '')}>
                  <Link href={`${link.to}`}>{link.text}</Link>
                </Li>
              ),
          )}
        </ul>
      </nav>
    </Aside>
  );
};
NavLinks.displayName = 'NavLinks';
