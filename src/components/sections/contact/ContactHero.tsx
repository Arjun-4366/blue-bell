import PageHero from '../../layout/PageHero';
import domeImg from '@/images/dome/dome-12.webp';

import { PageHeroContent } from '@/types/siteContent';

export default function ContactHero({ data }: { data?: PageHeroContent }) {
  return (
    <PageHero
      eyebrow={data?.eyebrow || "Connect With Us"}
      heading={data?.heading || "We Are"}
      headingItalic={data?.headingItalic || "Here For You."}
      subtitle={data?.subtitle || "Whether you wish to reserve a stay, plan a private celebration, or simply enquire — our Periya-based team is available around the clock."}
      imageSrc={data?.imageUrl || domeImg.src}
      imageAlt={data?.imageAlt || "Earthen dome villa at Blue Bell"}
      scopeClass="con-hero"
      imageZoomMobile={1.4}
      imageTransformOriginMobile="center 20%"
    />
  );
}
