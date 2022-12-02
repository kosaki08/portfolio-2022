import Image from 'next/image';
import { MainVisual, SVGText } from '../../app/components/sub-pages/main-visual';
import { Contents, ContentWrapper, Inner, Main } from '../../app/components/sub-pages/elements';
import { PageContainer } from '../../app/components/page-container';
import { NextPageNav } from '../../app/components/next-page-nav';
import worksImg from '../../app/assets/images/works/works_1.jpg';
import aboutImg from '../../app/assets/images/about/about_1.jpg';

export default function Works() {
  return (
    <PageContainer>
      <Main>
        <Inner>
          <MainVisual>
            <SVGText page="works" />
            <Image src={worksImg} alt="Works" sizes="100vw" fill />
          </MainVisual>
          <ContentWrapper>
            <Contents>
              <p>Works</p>
            </Contents>
          </ContentWrapper>
        </Inner>
        <NextPageNav href="/about" src={aboutImg} text="Next Page" />
      </Main>
    </PageContainer>
  );
}
