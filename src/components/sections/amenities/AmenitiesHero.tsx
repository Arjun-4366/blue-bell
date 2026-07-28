import PageHero from '../../layout/PageHero';
import amenitiesHeroImg from '@/assests/images/amenities/amenitiesHero.webp';

export default function AmenitiesHero() {
  return (
    <PageHero
      eyebrow="What Awaits You"
      heading="Made for"
      headingItalic="Easy Days."
      subtitle="Every corner of Blue Bell is designed around how our guests actually spend their time — unhurried, together, and away from the everyday."
      imageSrc={amenitiesHeroImg.src}
      imageAlt="Guests gathered around an evening campfire at Blue Bell"
      scopeClass="am-hero"
    />
  );
}
