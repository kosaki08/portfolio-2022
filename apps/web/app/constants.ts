export const myName = 'Kazunori Osaki';

export const staticPageKeys = ['about', 'works', 'contact'] as const;
export type StaticPageKey = typeof staticPageKeys[number];

export const worksPageKeys = ['ut-aim', 'business-card', 'osozakura-image', 'shizuka-box', 'osozakura', 'happy-life'] as const;
export type WorksPageKey = typeof worksPageKeys[number];

export type PageKey = StaticPageKey | WorksPageKey;
