import { FC } from 'react';
import { useRouter } from 'next/router';
import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { getMediaQuery } from '@portfolio-2022/utils';
import { myName } from '../../constants';

const Root = withTheme(
  styled.footer(({ theme }) => ({
    padding: '3rem 1.5rem',
    backgroundColor: theme.colorPalettes.greyPlusOne,
    p: {
      padding: 0,
      fontSize: theme.fontSizes.xSmall,
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
    <Root>
      <p>{`© Copyright ${myName} All Rights Reserved.`}</p>
    </Root>
  );
};
