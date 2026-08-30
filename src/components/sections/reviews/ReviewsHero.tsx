import PageHero from '../../layout/PageHero';
import domeImg from '@/images/dome/dome-10.webp';

import { PageHeroContent } from '@/types/siteContent';

export default function ReviewsHero({ data }: { data?: PageHeroContent }) {
  return (
    <PageHero
      eyebrow={data?.eyebrow || "Guest Stories"}
      heading={data?.heading || "Voices of"}
      headingItalic={data?.headingItalic || "Blue Bell."}
      subtitle={data?.subtitle || "Honest reflections from guests who chose to escape into Periya's forested highlands — and found something far beyond a holiday."}
      imageSrc={data?.imageUrl || domeImg.src}
      imageAlt={data?.imageAlt || "Private dome deck at Blue Bell"}
      scopeClass="rev-hero"
    />
  );
}
