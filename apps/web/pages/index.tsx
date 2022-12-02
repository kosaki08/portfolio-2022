import { LinkButton } from '../app/components/link-button';
import { PageContainer } from '../app/components/page-container';

export default function Web() {
  return (
    <PageContainer>
      <h1>Web</h1>
      <LinkButton href="/works">Works</LinkButton>
    </PageContainer>
  );
}
