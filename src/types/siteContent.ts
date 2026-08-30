/** Mirrors bluebell-backend siteContent.model.ts interfaces exactly. */

export interface HomeHeroContent {
  locationTag: string;
  headingLine1: string;
  headingLine2: string;
  subtitle: string;
  videoUrl: string;
}

export interface HomeStat {
  value: string;
  label: string;
  caption: string;
}

export interface StayType {
  title: string;
  tag: string;
  desc: string;
  images: string[];
}

export interface HomeSanctuariesContent {
  badgeText: string;
  sectionLabel: string;
  title: string;
  stayTypes: StayType[];
}

export interface HomeStatsContent {
  stats: HomeStat[];
}

export interface AboutValue {
  title: string;
  desc: string;
}

export interface Milestone {
  year: string;
  event: string;
}

export interface AboutPageContent {
  heroEyebrow: string;
  heroTitle: string;
  heroHeadingItalic: string;
  heroSubtitle: string;
  heroImageUrl: string;
  heroImageAlt: string;
  storyLabel: string;
  storyTitle: string;
  storyBody: string;
  journeyTitle: string;
  milestones: Milestone[];
  valuesLabel: string;
  valuesTitle: string;
  values: AboutValue[];
}

/** Shared shape for the public site's per-route PageHero component. */
export interface PageHeroContent {
  eyebrow: string;
  heading: string;
  headingItalic: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ContactInfoContent {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  mapEmbedUrl: string;
  instagramUrl: string;
  facebookUrl: string;
}

export interface LegalContent {
  privacyPolicy: string;
  termsOfService: string;
}

export interface SiteContent {
  homeHero: HomeHeroContent;
  homeSanctuaries: HomeSanctuariesContent;
  homeStats: HomeStatsContent;
  aboutPage: AboutPageContent;
  amenitiesHero: PageHeroContent;
  bookNowHero: PageHeroContent;
  contactHero: PageHeroContent;
  galleryHero: PageHeroContent;
  reviewsHero: PageHeroContent;
  staysHero: PageHeroContent;
  contactInfo: ContactInfoContent;
  legal: LegalContent;
}

export interface SiteContentDocument extends SiteContent {
  _id: string;
  updatedAt: string;
}
