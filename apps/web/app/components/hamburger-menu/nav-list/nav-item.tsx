import { FC, useCallback } from 'react';
import { LinkItem } from '../../nav-links';
import { StyledLink } from './elements';
import { OnClickItemCallback } from './nav-list';

export interface NavItemProps {
  link: LinkItem;
  onClickItem?: OnClickItemCallback;
}

export const NavItem: FC<NavItemProps> = (props) => {
  const { link, onClickItem } = props;
  const { to, text } = link;

  const onClickCallback = useCallback<() => void>(() => {
    onClickItem && onClickItem({ to, text });
  }, [to, text, onClickItem]);

  return (
    <li>
      <StyledLink href={to} onClick={onClickCallback}>
        {text}
      </StyledLink>
    </li>
  );
};
NavItem.displayName = 'NavItem';
