import PageHero from '../../layout/PageHero';
import domeImg from '@/images/dome/dome-3.webp';

import { PageHeroContent } from '@/types/siteContent';

export default function StaysHero({ data }: { data?: PageHeroContent }) {
  return (
    <PageHero
      eyebrow={data?.eyebrow || "Accommodations"}
      heading={data?.heading || "Your Perfect"}
      headingItalic={data?.headingItalic || "Retreat Awaits."}
      subtitle={data?.subtitle || "From high-canopy treehouse suites to private earthen dome villas — six sanctuaries, each a world unto itself, deep in Periya's forested hills."}
      imageSrc={data?.imageUrl || domeImg.src}
      imageAlt={data?.imageAlt || "Private-pool earthen dome villa at Blue Bell"}
      scopeClass="stays-hero"
    />
  );
}
