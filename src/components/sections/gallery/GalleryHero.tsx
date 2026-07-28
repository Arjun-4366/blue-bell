import PageHero from '../../layout/PageHero';
import treehouseImg from '@/images/treehouse/treehouse-3.webp';

export default function GalleryHero() {
  return (
    <PageHero
      eyebrow="Visual Journey"
      heading="A Glimpse of"
      headingItalic="Blue Bell."
      subtitle="Explore our earthen dome sanctuaries, high-canopy treehouses, healing gardens, and the breathtaking mist-laden peaks of Wayanad."
      imageSrc={treehouseImg.src}
      imageAlt="High-canopy treehouse at Blue Bell"
      scopeClass="gal-hero"
    />
  );
}
