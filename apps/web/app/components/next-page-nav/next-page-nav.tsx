import { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import { StyledLink, Text } from './elements';
import { ScrollReveal } from '@portfolio-2022/ui';

export interface NextPageNavProps {
  src: ImageProps['src'];
  text: string;
  href: string;
}

export const NextPageNav: FC<NextPageNavProps> = (props) => {
  const { src, text, href } = props;
  return (
    <ScrollReveal>
      <StyledLink href={href}>
        <Image src={src} alt={text} />
        <Text>{text}</Text>
      </StyledLink>
    </ScrollReveal>
  );
};
NextPageNav.displayName = 'NextPageNav';
