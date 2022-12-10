import React, { FC } from 'react';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';

export interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}

export const defaultVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    offset: -200,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const ScrollReveal: FC<ScrollRevealProps> = (props) => {
  const { children, variants = defaultVariants, ...rest } = props;
  const motionProps: HTMLMotionProps<'div'> = {
    variants,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
    ...rest,
  };
  return <motion.div {...motionProps}>{children}</motion.div>;
};
ScrollReveal.displayName = 'ScrollReveal';
