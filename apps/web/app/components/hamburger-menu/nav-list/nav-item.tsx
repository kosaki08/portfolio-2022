import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';
import { LinkItem } from '../../nav-links';
import { TextWrapper } from './elements';
import { OnClickItemCallback } from './nav-list';

export interface NavItemProps {
  link: LinkItem;
  onClickItem?: OnClickItemCallback;
}

export const NavItem: FC<NavItemProps> = (props) => {
  const { link, onClickItem } = props;
  const { pathname } = useRouter();
  const { href, text } = link;

  const onClickCallback = useCallback<() => void>(() => {
    onClickItem && onClickItem({ href, text });
  }, [href, text, onClickItem]);

  return (
    <li>
      <TextWrapper isCurrent={pathname === href} href={href} onClick={onClickCallback}>
        {text}
      </TextWrapper>
    </li>
  );
};
NavItem.displayName = 'NavItem';
