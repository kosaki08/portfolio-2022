import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { prisma } from '@portfolio-2022/database';
import { MainVisual, SVGText } from '../../app/components/sub-pages/main-visual';
import { ContentWrapper, Inner, Main } from '../../app/components/sub-pages/elements';
import { PageContainer } from '../../app/components/page-container';
import { NextPageNav } from '../../app/components/next-page-nav';
import worksImg from '../../app/assets/images/works/works_1.jpg';
import aboutImg from '../../app/assets/images/about/about_1.jpg';
import { Footer } from '../../app/components/sub-pages';
import { CardLink, CardLinkProps, WorkItem, WorkWithSlug } from '../../app/components/works';

interface WorksProps {
  works: string;
}

export default function Works(props: WorksProps) {
  const { works: worksStr } = props;
  const works = JSON.parse(worksStr) as WorkWithSlug[];

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
              {works.map((work) => {
                const { slug, title, tag } = work;
                const cardProps: CardLinkProps = {
                  slug,
                  href: `works/${slug}`,
                  title,
                  tag,
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

export const getServerSideProps: GetServerSideProps<{
  works: string;
}> = async () => {
  const works = await prisma.work.findMany({ orderBy: { createdAt: 'asc' } });
  return {
    props: {
      works: JSON.stringify(works),
    },
  };
};
