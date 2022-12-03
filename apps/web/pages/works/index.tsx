import Image from 'next/image';
import { MainVisual, SVGText } from '../../app/components/sub-pages/main-visual';
import { ContentWrapper, Inner, Main } from '../../app/components/sub-pages/elements';
import { PageContainer } from '../../app/components/page-container';
import { NextPageNav } from '../../app/components/next-page-nav';
import worksImg from '../../app/assets/images/works/works_1.jpg';
import aboutImg from '../../app/assets/images/about/about_1.jpg';
import { Footer } from '../../app/components/sub-pages';
import { CardLink, CardLinkProps, WorkItem, works } from '../../app/components/works';

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
            <ul>
              {Object.values(works).map((work) => {
                const { slug, title, tag, thumbSrc } = work;
                const cardProps: CardLinkProps = {
                  href: `works/${slug}`,
                  title,
                  tag,
                  thumbSrc,
                };
                return (
                  <WorkItem key={work.slug}>
                    <CardLink {...cardProps} />
                  </WorkItem>
                );
              })}
            </ul>
          </ContentWrapper>
        </Inner>
        <NextPageNav href="/about" src={aboutImg} text="Next Page" />
        <Footer />
      </Main>
    </PageContainer>
  );
}
