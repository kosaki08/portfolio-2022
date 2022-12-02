import { FC, HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface PageContainerProps {
  children?: ReactNode;
}

export const PageContainer: FC<PageContainerProps> = (props) => {
  const { children } = props;
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};
PageContainer.displayName = 'PageContainer';
