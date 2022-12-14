import { useRouter } from 'next/router';
import { motion, Variants } from 'framer-motion';
import { FC, useCallback } from 'react';
import { LinkItem } from '../../nav-links';
import { TextWrapper } from './elements';
import { OnClickItemCallback } from './nav-list';

export interface NavItemProps {
  link: LinkItem;
  onClickItem?: OnClickItemCallback;
}

const variants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
};

export const NavItem: FC<NavItemProps> = (props) => {
  const { link, onClickItem } = props;
  const { pathname } = useRouter();
  const { href, text } = link;

  const onClickCallback = useCallback<() => void>(() => {
    onClickItem && onClickItem({ href, text });
  }, [href, text, onClickItem]);

  return (
    <motion.li initial="hidden" animate="visible" variants={variants}>
      <TextWrapper isCurrent={pathname === href} href={href} onClick={onClickCallback}>
        {text}
      </TextWrapper>
    </motion.li>
  );
};
NavItem.displayName = 'NavItem';
