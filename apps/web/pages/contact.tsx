import Image from 'next/image';
import { ScrollReveal } from '@portfolio-2022/ui';
import { MainVisual, SVGText } from '../app/components/sub-pages/main-visual';
import { Inner, ContentWrapper, Contents, Main } from '../app/components/sub-pages/elements';
import contactImg from '../app/assets/images/contact/contact_1.jpg';
import { PageContainer } from '../app/components/page-container';
import { Footer } from '../app/components/sub-pages';

export default function Contact() {
  return (
    <PageContainer>
      <Main>
        <Inner>
          <MainVisual>
            <SVGText page="contact" />
            <Image src={contactImg} alt="Contact" sizes="100vw" fill />
          </MainVisual>
          <ContentWrapper>
            <Contents>
              <ScrollReveal>
                <p>
                  ご相談やお仕事のご依頼については、以下のメールアドレスまでご連絡ください。
                  <br />
                  kazunoriosaki@gmail.com
                </p>
              </ScrollReveal>
            </Contents>
          </ContentWrapper>
        </Inner>
        <Footer />
      </Main>
    </PageContainer>
  );
}
