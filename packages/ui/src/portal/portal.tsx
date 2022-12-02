import React, { FC, Fragment, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children?: ReactNode;
}

export const Portal: FC<PortalProps> = (props) => {
  const { children } = props;
  const el = typeof document !== 'undefined' ? document.getElementById('portal') : null;
  return el ? createPortal(children, el) : <Fragment>{children}</Fragment>;
};
Portal.displayName = 'Portal';
