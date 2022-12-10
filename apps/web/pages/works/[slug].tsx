import { GetStaticPaths, GetStaticProps } from 'next';
import JsxParser from 'react-jsx-parser';
import { ParsedUrlQuery } from 'querystring';
import { ScrollReveal } from '@portfolio-2022/ui';
import { Contents, Inner, Main, WorksContentWrapper } from '../../app/components/sub-pages/elements';
import { PageContainer } from '../../app/components/page-container';
import { NextPageNav } from '../../app/components/next-page-nav';
import { Footer } from '../../app/components/sub-pages';
import { WorksHeader, WorksHeaderProps } from '../../app/components/works/header';
import { Work, works } from '../../app/components/works';
import { WorksPageKey } from '../../app/constants';

export interface WorksDetailProps {
  work: Work;
  nextWork: Work;
  idx: number;
}

export interface WorksDetailQuery extends ParsedUrlQuery {
  slug: WorksPageKey;
}

export default function WorksDetail(props: WorksDetailProps) {
  const { work, nextWork, idx } = props;
  const { thumbSrc, title, tag, link, content, nextPageSlug } = work;
  const { thumbSrc: nextThumbSrc } = nextWork;

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
        {nextWork && <NextPageNav href={nextPageSlug} src={nextThumbSrc} text="Next Work" />}
        <Footer />
      </Main>
    </PageContainer>
  );
}

export const getStaticPaths: GetStaticPaths<WorksDetailQuery> = async () => {
  return {
    paths: Object.values(works).map((work) => ({
      params: {
        slug: work.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<WorksDetailProps, WorksDetailQuery> = async ({ params }) => {
  let work: Work | undefined;
  let nextWork: Work | undefined;
  let idx = -1;
  if (params) {
    const { slug } = params;
    work = works[slug];
    nextWork = works[work?.nextPageSlug];
    idx = Object.values(works).findIndex((w) => w.slug === slug);
  }

  if (!params || !work || !nextWork || idx === -1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      work,
      nextWork,
      idx,
    },
  };
};
