import { Contents, HelloWorld, Inner, MainVisual } from '../app/components/home';
import { LinkButton } from '../app/components/link-button';
import { PageContainer } from '../app/components/page-container';

export default function Web() {
  return (
    <PageContainer style={{ overflow: 'hidden', width: '100vw', height: '100vh' }}>
      <Contents>
        <Inner>
          <HelloWorld />
          <LinkButton href="/works">View Works</LinkButton>
        </Inner>
      </Contents>
      <MainVisual />
    </PageContainer>
  );
}
