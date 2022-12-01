import Image from 'next/image';
import { MainVisual } from '../../app/components/main-visual';
import { Contents, ContentWrapper, Inner, Main } from '../../app/components/sub-pages/elements';
import { SVGText } from '../../app/components/main-visual/svg-text';
import worksImg from '../../app/assets/images/works/works_1.jpg';

export default function Works() {
  return (
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
    </Main>
  );
}
