import { ImageProps } from 'next/image';
import { Work } from '@portfolio-2022/database';
import { WorksPageKey } from '../../constants';
import utThumb from '../../assets/images/works/ut-aim/ut_aim_thumb.png';
import businessCardThumb from '../../assets/images/works/business-card/business_card_thumb.jpg';
import osozakuraImageThumb from '../../assets/images/works/osozakura-image/osozakura_image_thumb.jpg';
import osozakuraThumb from '../../assets/images/works/osozakura/osozakura_thumb.jpg';
import happyLifeThumb from '../../assets/images/works/happy-life/happy_life_thumb.jpg';

export type WorkWithSlug = Work & { slug: WorksPageKey };

export type WorkThumb = Record<WorksPageKey, ImageProps['src']>;
export const worksThumb: WorkThumb = {
  'ut-aim': utThumb,
  'business-card': businessCardThumb,
  'osozakura-image-design': osozakuraImageThumb,
  osozakura: osozakuraThumb,
  'happy-life': happyLifeThumb,
};
