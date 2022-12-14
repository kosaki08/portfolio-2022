import Image from 'next/image';
import { ScrollReveal } from '@portfolio-2022/ui';
import { MainVisual, SVGText } from '../app/components/sub-pages/main-visual';
import { Contents, ContentWrapper, Inner, Main } from '../app/components/sub-pages/elements';
import { PageContainer } from '../app/components/page-container';
import { NextPageNav } from '../app/components/next-page-nav';
import aboutImg from '../app/assets/images/about/about_1.jpg';
import contactImg from '../app/assets/images/contact/contact_1.jpg';
import { Footer } from '../app/components/sub-pages';

export default function About() {
  return (
    <PageContainer>
      <Main>
        <Inner>
          <MainVisual>
            <SVGText page="about" />
            <Image
              src={aboutImg}
              alt="About"
              sizes="100vw"
              fill
              style={{
                objectPosition: '50% 70%',
              }}
            />
          </MainVisual>
          <ContentWrapper>
            <Contents>
              <ScrollReveal>
                <h2>ウェブ制作</h2>
              </ScrollReveal>
              <ScrollReveal>
                <p>
                  これまでウェブサイトの制作では、大企業から個人事業主のサイトまで、企業サイトやウェブアプリケーションなど様々なタイプのサイトを制作してきました。
                  制作時には見やすく分かりやすい、ユーザーフレンドリーなサイトの制作を目指しています。
                  <br />※ 当サイトは Next.js (React.js)や React Three Fiber, Turborepo 等で制作しています。Vue.js、WordPress
                  サイトの制作についてもおまかせ下さい。
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <h2>デザイン</h2>
              </ScrollReveal>
              <ScrollReveal>
                <p>
                  現在デザイン関連のお仕事では、主にウェブサイトの設計やデザインを請け負っています。ウェブ以外の媒体では、地方公共団体が外国人向けに配布する多言語パンフレットや製品紹介のリーフレット、食品のパッケージデザインなど、幅広く行ってきました。
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <h2>サイト運営</h2>
              </ScrollReveal>
              <ScrollReveal>
                <p>
                  これまで個人プロジェクトとして50〜100万PVほどのメディアサイトなど様々なサイトの立ち上げなどを行ってきましたので、運用を見据えたサイト制作やサポートが可能です。
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <h2>ディープラーニング</h2>
              </ScrollReveal>
              <ScrollReveal>
                <ul>
                  <li>2012年 公益社団法人 全国経理教育協会 上級（cf.日商簿記検定1級） 取得</li>
                  <li>2017年 Udacity Deep Learning NanoDegree 取得</li>
                  <li>2018年～ 一般社団法人 人工知能学会 個人正会員</li>
                  <li>2019年 一般社団法人 日本ディープラーニング協会 ジェネラリスト</li>
                  <li>
                    2019年 一般社団法人 日本ディープラーニング協会 第1回ハッカソン
                    <span className="visible">&nbsp;</span>
                    <span className="hidden">
                      <br />
                    </span>
                    チーム・ニューラルポケットとして GPU EATER賞 受賞
                  </li>
                </ul>
              </ScrollReveal>
            </Contents>
          </ContentWrapper>
        </Inner>
        <NextPageNav href="/contact" src={contactImg} text="Next Page" />
        <Footer />
      </Main>
    </PageContainer>
  );
}
