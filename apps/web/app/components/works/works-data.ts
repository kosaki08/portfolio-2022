import { WorksPageKey } from './../../constants';
import { ImageProps } from 'next/image';
import utThumb from '../../assets/images/works/ut-aim/ut_aim_1.png';
import osozakuraImageThumb from '../../assets/images/works/osozakura-image/osozakura_image_design_4.jpg';
import osozakuraThumb from '../../assets/images/works/osozakura/osozakura_12.jpg';
import happyLifeThumb from '../../assets/images/works/happy-life/happy_life_11.jpg';

export interface Work {
  slug: WorksPageKey;
  title: string;
  content: string;
  link?: string;
  thumbSrc: ImageProps['src'];
  tag: string;
  nextPageSlug: WorksPageKey;
}

export type Works = Record<WorksPageKey, Work>;

export const works: Works = {
  'ut-aim': {
    title: '株式会社 UTエイム Webパンフレット',
    slug: 'ut-aim',
    thumbSrc: utThumb,
    tag: 'Web / Development',
    nextPageSlug: 'business-card',
    link: 'http://ut-g.com/linemensetsu/web-pamphlet/',
    content: `
<p class="introduction">紹介文が入ります</p>
    `,
  },
  'business-card': {
    title: '個人名刺',
    slug: 'business-card',
    thumbSrc: utThumb,
    tag: 'Paper / Design',
    nextPageSlug: 'osozakura-image-design',
    content: `
<p class="introduction">紹介文が入ります</p>
    `,
  },
  'osozakura-image-design': {
    title: '日本ワイン専門店 遅桜 イメージデザイン',
    slug: 'osozakura-image-design',
    thumbSrc: osozakuraImageThumb,
    tag: 'Web / Paper / Design',
    nextPageSlug: 'happy-life',
    content: `
<p class="introduction">
  日本ワイン専門店『西麻布
  遅桜』様のイメージデザインを制作させていただきました。
  <br />
  『日本各地の銘品の縁（ENISHI）をつなぐ』をコンセプトに、日本生まれの高品質ワインを紹介するお店でしたので、日本のこころを大事にしたい、というお店の考えやワインへのこだわりを、デザインを通して伝えられるよう心がけました。
</p>
<p class="img">
  <img
    src="/images/works/osozakura-image-design/osozakura_image_design_2.jpg"
    alt="遅桜イメージデザイン"
  />
</p>
<p class="img-full">
  <img
    src="/images/works/osozakura-image-design/osozakura_image_design_1.jpg"
    alt="遅桜イメージデザイン"
  />
</p>
<p class="img">
  <img
    src="/images/works/osozakura-image-design/osozakura_image_design_3.jpg"
    alt="遅桜イメージデザイン"
  />
</p>
    `,
  },
  osozakura: {
    title: '日本ワイン専門店 遅桜',
    slug: 'osozakura',
    thumbSrc: osozakuraThumb,
    tag: 'Web / Design / Development / WordPress',
    nextPageSlug: 'happy-life',
    content: `
<div class="introduction">
  <p>
    『日本ワイン専門店 西麻布 遅桜』、『西麻布 Wine Bar
    綺羅星』様のウェブサイトを制作させていただきました。
  </p>
  <p>
    お客様からは、遅桜をメインとして扱いながら、店舗ビル2階に入る姉妹店のワインバー『西麻布
    Wine Bar
    綺羅星』についても紹介したい、というご要望をいただいたため、初見のユーザーでも分かりやく、知りたい情報がすぐに知ることができるよう、分かりやすさには細心の注意を払いながら、サイト全体の設計を行いました。
  </p>
  <p>
    ワインショップや飲食店では、写真を見て良い印象を与えられるかどうかが非常に大事になると思いますので、撮影用のラフスケッチや資料等を作成し、ウェブサイトを通して伝えたいお店の良さやこだわりが反映された写真を撮影してもらえるよう、対応させていただきました。
  </p>
</div>
<p class="img"><img src="/images/works/osozakura/osozakura_1.png" /></p>
<p class="img"><img src="/images/works/osozakura/osozakura_2.png" /></p>
<p class="img-full"><img src="/images/works/osozakura/osozakura_4.png" /></p>
<p class="img"><img src="/images/works/osozakura/osozakura_6.png" /></p>
<p class="img"><img src="/images/works/osozakura/osozakura_3.png" /></p>
<p class="img-full"><img src="/images/works/osozakura/osozakura_5.png" /></p>
<p class="img"><img src="/images/works/osozakura/osozakura_8.png" /></p>
<p class="img-full"><img src="/images/works/osozakura/osozakura_9.png" /></p>
<p class="img"><img src="/images/works/osozakura/osozakura_10.png" /></p>
<p class="img"><img src="/images/works/osozakura/osozakura_11.png" /></p>
<p class="img"><img src="/images/works/osozakura/osozakura_7.png" /></p>
`,
  },
  'happy-life': {
    title: '株式会社 犬の専門店 HappyLife',
    slug: 'happy-life',
    thumbSrc: happyLifeThumb,
    tag: 'Web / E-Commerce / Design / Development / WordPress',
    nextPageSlug: 'ut-aim',
    content: `
<div class="introduction">
  <p>
  『犬の専門店 HappyLife』様の通販機能付きウェブサイトをWordPressで制作させていただきました。<br />
  人も犬も楽しく一緒に暮らすお手伝いをしたいというお店の考えを、デザインに反映できるよう心がけました。<br />
  店舗には毎週のように新しい仔犬がやってくるため、仔犬紹介のための更新作業を少しでも減らしたいというご要望をいただいていたため、店舗スタッフの方でも簡単に更新できるよう運用のしやすさにも力を入れ、リニューアル前と比べて、更新にかかる作業時間をおよそ半分程度に短縮できた、リニューアルして良かったとの声をいただいております。
  </p>
</div>
<p class="img"><img src="/images/works/happy-life/happy_life_1.png" /></p>
<p class="img"><img src="/images/works/happy-life/happy_life_8.png" /></p>
<p class="img"><img src="/images/works/happy-life/happy_life_2.png" /></p>
<p class="img-full"><img src="/images/works/happy-life/happy_life_6.jpg" /></p>
<p class="img"><img src="/images/works/happy-life/happy_life_5.png" /></p>
<p class="img-full"><img src="/images/works/happy-life/happy_life_7.jpg" /></p>
<p class="img"><img src="/images/works/happy-life/happy_life_3.png" /></p>
`,
  },
};
