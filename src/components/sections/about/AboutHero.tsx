import PageHero from '../../layout/PageHero';
import treehouseImg from '@/images/treehouse/treehouse-7.webp';

import { AboutPageContent } from '@/types/siteContent';

export default function AboutHero({ data }: { data?: AboutPageContent }) {
  return (
    <PageHero
      eyebrow={data?.heroEyebrow || "Our Story"}
      heading={data?.heroTitle || "Born from the"}
      headingItalic={data?.heroHeadingItalic || "Heart of Wayanad."}
      subtitle={data?.heroSubtitle || "Treehouses, tree huts, and private-pool domes tucked into Periya, Wayanad's quieter northern belt — rooted here since 2020."}
      imageSrc={data?.heroImageUrl || treehouseImg.src}
      imageAlt={data?.heroImageAlt || "Treehouse at Blue Bell surrounded by Wayanad forest"}
      scopeClass="about-hero"
    />
  );
}
