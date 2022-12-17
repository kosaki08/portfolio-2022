import { prisma } from '.';
import { Work } from '@prisma/client';

const DEFAULT_WORKS: Work[] = [
  {
    title: '株式会社 UTエイム Webパンフレット',
    slug: 'ut-aim',
    createdAt: new Date('202-01-01'),
    tag: 'Web / Development',
    nextPageSlug: 'business-card',
    link: 'http://ut-g.com/linemensetsu/web-pamphlet/',
    content: `
<ScrollReveal>
  <p className="introduction">
    UTエイム様のウェブパンフレットのアニメーション作成と実装を担当させていただきました。
    <br />
    就活生に向けた会社説明のために、こちらのウェブページをスライドのようにプロジェクターに写しながら就活生に説明できること、就活生が帰宅した後でも見返せることが要件となっていました。
    内容が自然に頭に入るよう心掛けながら、アニメーションを細かく調整し実装しました。
  </p>
</ScrollReveal>
<ScrollReveal className="img">
  <img
    src="/images/works/ut-aim/ut_1.gif"
    alt="UTエイムウェブパンフレット"
  />
</ScrollReveal>
<ScrollReveal className="img">
  <img
    src="/images/works/ut-aim/ut_2.gif"
    alt="UTエイムウェブパンフレット"
  />
</ScrollReveal>
<ScrollReveal className="img">
  <img
    src="/images/works/ut-aim/ut_3.gif"
    alt="UTエイムウェブパンフレット"
  />
</ScrollReveal>
<ScrollReveal className="img">
  <img
    src="/images/works/ut-aim/ut_4.gif"
    alt="UTエイムウェブパンフレット"
  />
</ScrollReveal>
<ScrollReveal className="img">
  <img
    src="/images/works/ut-aim/ut_5.gif"
    alt="UTエイムウェブパンフレット"
  />
</ScrollReveal>
<ScrollReveal className="img">
  <img
    src="/images/works/ut-aim/ut_6.gif"
    alt="UTエイムウェブパンフレット"
  />
</ScrollReveal>
    `,
  },
  {
    title: '個人用名刺',
    slug: 'business-card',
    createdAt: new Date('202-02-01'),
    tag: 'Paper / Design',
    nextPageSlug: 'osozakura-image-design',
    link: '',
    content: `
<ScrollReveal>
  <p className="introduction">個人用の名刺をワインのラベルをモチーフに制作しました。
    <br />
    表側には、富士山や駿河湾、清水の街を一望できる、静岡市の日本平から撮影した写真をスケッチ風に加工した画像や、タイムスタンプで変換した生年月日、静岡という文字をフランス語に当てた文字などを配置しています。
    表側のフォントや文字サイズはモチーフに合わせて調整しているため、裏側は情報提供目的でシンプルにしています。
    印刷する用紙は、光沢がなくあせた風合いの材質を使用しました。
    <br />
    ※ 撮影: Sony α7R III, Sonnar T* FE 55mm F1.8 ZA, Lightroom, Photoshop
  </p>
</ScrollReveal>
<ScrollReveal className="img">
  <img
    src="/images/works/business-card/card_1.png"
    alt="個人用名刺"
  />
</ScrollReveal>
<ScrollReveal className="img">
  <img
    src="/images/works/business-card/card_3.png"
    alt="個人用名刺"
  />
</ScrollReveal>
    `,
  },
  {
    title: '日本ワイン専門店 遅桜 イメージデザイン',
    slug: 'osozakura-image-design',
    createdAt: new Date('202-03-01'),
    tag: 'Web / Paper / Design',
    nextPageSlug: 'osozakura',
    link: '',
    content: `
<ScrollReveal>
  <p className="introduction">
    日本ワイン専門店『西麻布 遅桜』様のイメージデザインを制作しました。
    <br />
    『日本各地の銘品の縁をつなぐ』をコンセプトに、日本生まれの高品質ワインを紹介するお店でしたので、日本のこころを大事にしたいというお店の考えを伝えられるように心がけました。
  </p>
</ScrollReveal>
<ScrollReveal className="img">
  <img
    src="/images/works/osozakura-image-design/osozakura_image_design_2.jpg"
    alt="遅桜イメージデザイン"
  />
</ScrollReveal>
<ScrollReveal className="img-full">
  <img
    src="/images/works/osozakura-image-design/osozakura_image_design_1.jpg"
    alt="遅桜イメージデザイン"
  />
</ScrollReveal>
<ScrollReveal className="img">
  <img
    src="/images/works/osozakura-image-design/osozakura_image_design_4.jpg"
    alt="遅桜イメージデザイン"
  />
</ScrollReveal>
<ScrollReveal className="img">
  <img
    src="/images/works/osozakura-image-design/osozakura_image_design_3.jpg"
    alt="遅桜イメージデザイン"
  />
</ScrollReveal>
    `,
  },
  {
    title: '日本ワイン専門店 遅桜',
    slug: 'osozakura',
    createdAt: new Date('202-04-01'),
    tag: 'Web / Design / Development / WordPress',
    nextPageSlug: 'happy-life',
    link: '',
    content: `
<ScrollReveal>
  <p className="introduction">
    『日本ワイン専門店 西麻布 遅桜』、『西麻布 Wine Bar 綺羅星』様のウェブサイトを制作しました。
    <br />
    お客様からは、遅桜をメインとして扱いながらも、店舗ビル2階に入る姉妹店のワインバー『西麻布 Wine Bar 綺羅星』についても紹介したいというご要望をいただいていたため、トップページではワインショップをメインに、ワインバーの紹介は別ページにて行うようにしました。
    <br />
    写真撮影時にはラフスケッチや資料を作成し、無機質にならないように小物を配置するなど、お店のこだわりが反映されるようカメラマンと協力しました。
  </p>
</ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_1.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_2.png" /></ScrollReveal>
<ScrollReveal className="img-full"><img src="/images/works/osozakura/osozakura_4.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_6.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_3.png" /></ScrollReveal>
<ScrollReveal className="img-full"><img src="/images/works/osozakura/osozakura_5.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_8.png" /></ScrollReveal>
<ScrollReveal className="img-full"><img src="/images/works/osozakura/osozakura_9.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_10.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_11.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_12.jpg" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_7.png" /></ScrollReveal>
`,
  },
  {
    title: '日本ワイン専門店 遅桜',
    slug: 'osozakura',
    createdAt: new Date('202-05-01'),
    tag: 'Web / Design / Development / WordPress',
    nextPageSlug: 'happy-life',
    link: '',
    content: `
<ScrollReveal>
  <p className="introduction">
    『日本ワイン専門店 西麻布 遅桜』、『西麻布 Wine Bar 綺羅星』様のウェブサイトを制作しました。
    <br />
    お客様からは、遅桜をメインとして扱いながらも、店舗ビル2階に入る姉妹店のワインバー『西麻布 Wine Bar 綺羅星』についても紹介したいというご要望をいただいていたため、トップページではワインショップをメインに、ワインバーの紹介は別ページにて行うようにしました。
    <br />
    写真撮影時にはラフスケッチや資料を作成し、無機質にならないように小物を配置するなど、お店のこだわりが反映されるようカメラマンと協力しました。
  </p>
</ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_1.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_2.png" /></ScrollReveal>
<ScrollReveal className="img-full"><img src="/images/works/osozakura/osozakura_4.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_6.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_3.png" /></ScrollReveal>
<ScrollReveal className="img-full"><img src="/images/works/osozakura/osozakura_5.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_8.png" /></ScrollReveal>
<ScrollReveal className="img-full"><img src="/images/works/osozakura/osozakura_9.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_10.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_11.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_12.jpg" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/osozakura/osozakura_7.png" /></ScrollReveal>
`,
  },
  {
    title: '株式会社 犬の専門店 HappyLife',
    slug: 'happy-life',
    createdAt: new Date('202-06-01'),
    tag: 'Web / E-Commerce / Design / Development / WordPress',
    nextPageSlug: 'ut-aim',
    link: '',
    content: `
<ScrollReveal>
  <p className="introduction">
  『犬の専門店 HappyLife』様の通販機能付きウェブサイトをWordPressで制作しました。<br />
  人も犬も楽しく一緒に暮らすお手伝いをしたいというお店の考えを、デザインに反映できるよう心がけました。<br />
  仔犬紹介のための更新作業を少しでも減らしたいというご要望をいただいていたため、店舗スタッフの方でも簡単に更新できるよう運用のしやすさにも力を入れ、リニューアル前と比べて更新にかかる作業時間を半分程度に短縮できたと伺っています。
  </p>
</ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/happy-life/happy_life_1.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/happy-life/happy_life_8.png" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/happy-life/happy_life_2.png" /></ScrollReveal>
<ScrollReveal className="img-full"><img src="/images/works/happy-life/happy_life_6.jpg" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/happy-life/happy_life_5.png" /></ScrollReveal>
<ScrollReveal className="img-full"><img src="/images/works/happy-life/happy_life_7.jpg" /></ScrollReveal>
<ScrollReveal className="img"><img src="/images/works/happy-life/happy_life_3.png" /></ScrollReveal>
`,
  },
] as Work[];

(async () => {
  try {
    await Promise.all(
      DEFAULT_WORKS.map((work) =>
        prisma.work.upsert({
          where: {
            slug: work.slug!,
          },
          update: {
            ...work,
          },
          create: {
            ...work,
          },
        }),
      ),
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
