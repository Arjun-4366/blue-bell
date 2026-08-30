import PageHero from '../../layout/PageHero';
import treehouseImg from '@/images/treehouse/treehouse-3.webp';

import { PageHeroContent } from '@/types/siteContent';

export default function GalleryHero({ data }: { data?: PageHeroContent }) {
  return (
    <PageHero
      eyebrow={data?.eyebrow || "Visual Journey"}
      heading={data?.heading || "A Glimpse of"}
      headingItalic={data?.headingItalic || "Blue Bell."}
      subtitle={data?.subtitle || "Explore our earthen dome sanctuaries, high-canopy treehouses, healing gardens, and the breathtaking mist-laden peaks of Wayanad."}
      imageSrc={data?.imageUrl || treehouseImg.src}
      imageAlt={data?.imageAlt || "High-canopy treehouse at Blue Bell"}
      scopeClass="gal-hero"
    />
  );
}
