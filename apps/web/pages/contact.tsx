import Image from 'next/image';
import { MainVisual } from '../app/components/main-visual';
import { Inner, ContentWrapper, Contents, Main } from '../app/components/sub-pages/elements';
import { SVGText } from '../app/components/main-visual/svg-text';
import contactImg from '../app/assets/images/contact/contact_1.jpg';

export default function Contact() {
  return (
    <Main>
      <Inner>
        <MainVisual>
          <SVGText page="contact" />
          <Image src={contactImg} alt="Contact" sizes="100vw" fill />
        </MainVisual>
        <ContentWrapper>
          <Contents>
            <p>お仕事のご依頼やついては、以下のメールアドレスまでご連絡ください。</p>
            <p>kazunoriosaki@gmail.com</p>
          </Contents>
        </ContentWrapper>
      </Inner>
    </Main>
  );
}
