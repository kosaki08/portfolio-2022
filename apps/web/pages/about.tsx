import Image from 'next/image';
import { MainVisual, SVGText } from '../app/components/sub-pages/main-visual';
import { Contents, ContentWrapper, Inner, Main } from '../app/components/sub-pages/elements';
import aboutImg from '../app/assets/images/about/about_1.jpg';

export default function About() {
  return (
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
            <h2>ウェブ制作</h2>
            <p>
              これまでウェブサイトの制作では、有名企業のサイト制作からQ&Aサイト、通販サイト、会員制サイト、素材ダウンロードサイトなど幅広く制作してきました。
              どのような案件でも、見やすく分かりやすい、ユーザーフレンドリーなサイト制作を心がけています。
              <br />※ 当サイトは Remix.js (React.js) / Prisma.js (SQLite) 等で制作しています。Next.js や Vue.js、WordPress
              サイトの制作についてもおまかせ下さい。
            </p>
            <h2>SEO対策</h2>
            <p>
              SEO関連では、新鮮で信頼性のある情報の入手に力を入れています。以前SEO対策を担当したウェブサイトでは、競合性が高いキーワードで、広告を使わずに検索結果6位から1位にすることができました。
            </p>
            <h2>デザイン</h2>
            <p>
              現在デザイン関連のお仕事では、主にウェブサイトの設計やデザインを請け負っています。ウェブ以外の媒体では、地方公共団体が外国人向けに配布する多言語パンフレットや製品紹介のリーフレット、食品のパッケージデザインなど、幅広く行ってきました。
            </p>
            <h2>サイト運営</h2>
            <p>
              これまで個人プロジェクトとして50〜100万PVほどのメディアサイトなど様々なサイトの立ち上げなどを行ってきましたので、運用を見据えたサイト制作やサポートが可能です。
            </p>
            <h2>ディープラーニング</h2>
            <ul>
              <li>2017年 Udacity Deep Learning NanoDegree 取得</li>
              <li>2018年～ 一般社団法人 人工知能学会 個人正会員</li>
              <li>2019年 一般社団法人 日本ディープラーニング協会 ジェネラリスト</li>
              <li>2019年 一般社団法人 日本ディープラーニング協会 第1回ハッカソン チーム・ニューラルポケットとして GPU EATER賞 受賞</li>
            </ul>
          </Contents>
        </ContentWrapper>
      </Inner>
    </Main>
  );
}
