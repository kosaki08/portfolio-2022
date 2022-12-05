import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { theme } from '@portfolio-2022/theme';
import { useWindowSize } from '../../hooks';
import { Aside, Li } from './elements';

export interface LinkItem {
  href: string;
  text: string;
}

const links: LinkItem[] = [
  { href: '/works', text: 'Works' },
  { href: '/contact', text: 'Contact' },
  { href: '/about', text: 'About' },
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
              (pathname === '/' || link.href !== pathname) && (
                <Li key={link.href} data-link={link.href.replace('/', '')}>
                  <Link href={`${link.href}`}>{link.text}</Link>
                </Li>
              ),
          )}
        </ul>
      </nav>
    </Aside>
  );
};
NavLinks.displayName = 'NavLinks';
