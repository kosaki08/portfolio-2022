import { Contents, ContentWrapper, Inner, Main, WorksContentWrapper } from '../../app/components/sub-pages/elements';
import { PageContainer } from '../../app/components/page-container';
import { NextPageNav } from '../../app/components/next-page-nav';
import { Footer } from '../../app/components/sub-pages';
import { WorksHeader, WorksHeaderProps } from '../../app/components/works/header';
import { useRouter } from 'next/router';
import { works } from '../../app/components/works';
import { WorksPageKey } from '../../app/constants';

export default function WorksDetail() {
  const { query } = useRouter();
  const { id } = query;
  const work = works[id as WorksPageKey];
  const nextWork = works[work?.nextPageSlug];
  const idx = Object.values(works).findIndex((w) => w.slug === id);

  if (!work || !nextWork || idx === -1) {
    return null;
  }
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
            <Contents dangerouslySetInnerHTML={{ __html: content }} />
          </WorksContentWrapper>
        </Inner>
        {nextWork && <NextPageNav href={nextPageSlug} src={nextThumbSrc} text="Next Work" />}
        <Footer />
      </Main>
    </PageContainer>
  );
}
