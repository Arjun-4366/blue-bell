import PageHero from '../../layout/PageHero';
import diningImg from '@/images/dining/dining-4.webp';

import { PageHeroContent } from '@/types/siteContent';

export default function BookNowHero({ data }: { data?: PageHeroContent }) {
  return (
    <PageHero
      eyebrow={data?.eyebrow || "Direct Booking"}
      heading={data?.heading || "Reserve Your"}
      headingItalic={data?.headingItalic || "Sanctuary."}
      subtitle={data?.subtitle || "Book direct to secure our best guaranteed rate, a complimentary welcome massage, and flexible cancellation up to 14 days out."}
      imageSrc={data?.imageUrl || diningImg.src}
      imageAlt={data?.imageAlt || "Dining setup at Blue Bell Resort"}
      scopeClass="bk-hero"
    />
  );
}
