import { FC } from 'react';
import { useRouter } from 'next/router';
import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { getMediaQuery } from '@portfolio-2022/utils';
import { myName } from '../../constants';
import { ScrollReveal } from '@portfolio-2022/ui';

const Root = withTheme(
  styled.footer(({ theme }) => ({
    padding: '2rem 1.5rem',
    backgroundColor: theme.colorPalettes.greyPlusOne,
    p: {
      padding: 0,
      fontSize: theme.fontSizes.xxSmall,
      color: theme.colorPalettes.grey,
      textAlign: 'center',
      letterSpacing: 1,
    },
    [getMediaQuery('md')]: {
      paddingTop: '4rem',
      paddingBottom: '4rem',
    },
  })),
);

export const Footer: FC = () => {
  const { pathname } = useRouter();
  if (pathname === '/') {
    return null;
  }
  return (
    <ScrollReveal>
      <Root>
        <p>
          &copy; {`Copyright ${myName}`}
          <span className="hidden">&nbsp;</span>
          <span className="visible">
            <br />
          </span>
          All Rights Reserved.
        </p>
      </Root>
    </ScrollReveal>
  );
};
