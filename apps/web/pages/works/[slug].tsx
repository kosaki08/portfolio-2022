import { GetServerSideProps } from 'next';
import JsxParser from 'react-jsx-parser';
import { ParsedUrlQuery } from 'querystring';
import { prisma, Work } from '@portfolio-2022/database';
import { ScrollReveal } from '@portfolio-2022/ui';
import { Contents, Inner, Main, WorksContentWrapper } from '../../app/components/sub-pages/elements';
import { PageContainer } from '../../app/components/page-container';
import { NextPageNav } from '../../app/components/next-page-nav';
import { Footer } from '../../app/components/sub-pages';
import { WorksHeader, WorksHeaderProps } from '../../app/components/works/header';
import { WorksPageKey } from '../../app/constants';
import { worksThumb } from '../../app/components/works';

export interface WorksDetailProps {
  work: string;
  idx: number;
}

export interface WorksDetailQuery extends ParsedUrlQuery {
  slug: WorksPageKey;
}

export default function WorksDetail(props: WorksDetailProps) {
  const { work: workStr, idx } = props;
  const work = JSON.parse(workStr) as Work;
  const { title, tag, slug, link, content, nextPageSlug } = work;

  const thumbSrc = worksThumb[slug as WorksPageKey];
  const nextThumbSrc = worksThumb[nextPageSlug as WorksPageKey];

  const worksHeader: WorksHeaderProps = {
    thumbSrc,
    title,
    tag,
    link,
    num: `${String(idx + 1).padStart(2, '0')}.`,
  };

  return (
    <PageContainer>
      <Main>
        <Inner>
          <WorksHeader {...worksHeader} />
          <WorksContentWrapper>
            <Contents>
              {/** @ts-ignore Related react-jsx-parser issue: https://github.com/TroyAlford/react-jsx-parser/issues/234#issuecomment-1282007040 */}
              <JsxParser components={{ ScrollReveal }} jsx={content} />
            </Contents>
          </WorksContentWrapper>
        </Inner>
        {nextThumbSrc && <NextPageNav href={nextPageSlug} src={nextThumbSrc} text="Next Work" />}
        <Footer />
      </Main>
    </PageContainer>
  );
}

export const getServerSideProps: GetServerSideProps<{
  work: string;
  idx: number;
}> = async ({ params }) => {
  let work: Work | undefined;
  let idx = -1;
  if (params) {
    const { slug } = params;
    work = await prisma.work.findUniqueOrThrow({
      where: {
        slug: Array.isArray(slug) ? slug[0] : slug,
      },
    });
    idx = Object.keys(worksThumb).findIndex((k) => k === slug);
  }

  if (!params || !work || idx === -1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      work: JSON.stringify(work),
      idx,
    },
  };
};
