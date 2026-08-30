import PageHero from '../../layout/PageHero';
import amenitiesHeroImg from '@/assests/images/amenities/amenitiesHero.webp';

import { PageHeroContent } from '@/types/siteContent';

export default function AmenitiesHero({ data }: { data?: PageHeroContent }) {
  return (
    <PageHero
      eyebrow={data?.eyebrow || "What Awaits You"}
      heading={data?.heading || "Made for"}
      headingItalic={data?.headingItalic || "Easy Days."}
      subtitle={data?.subtitle || "Every corner of Blue Bell is designed around how our guests actually spend their time — unhurried, together, and away from the everyday."}
      imageSrc={data?.imageUrl || amenitiesHeroImg.src}
      imageAlt={data?.imageAlt || "Guests gathered around an evening campfire at Blue Bell"}
      scopeClass="am-hero"
    />
  );
}
