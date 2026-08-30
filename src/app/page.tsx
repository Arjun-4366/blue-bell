import Hero from '@/components/sections/home/Hero';
import HomeAbout from '@/components/sections/home/HomeAbout';
import HomeLocation from '@/components/sections/home/HomeLocation';
import HomeAmenities from '@/components/sections/home/HomeAmenities';
import HomeGallery from '@/components/sections/home/HomeGallery';
import { getSiteContent, getFaqs } from '@/services/api';
import HomeReviews from '@/components/sections/home/HomeReviews';
import HomeFAQ from '@/components/sections/home/HomeFAQ';
import HomeCTA from '@/components/sections/home/HomeCTA';

export default async function Home() {
  const [siteContent, faqs] = await Promise.all([
    getSiteContent(),
    getFaqs(),
  ]);

  console.log("site content",siteContent)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero data={siteContent?.homeHero} />
      <HomeAbout sanctuaries={siteContent?.homeSanctuaries} statsData={siteContent?.homeStats} />
      <HomeLocation />
      <HomeAmenities />
      <HomeGallery />
      <HomeReviews />
      <HomeFAQ faqs={faqs} />
      <HomeCTA />
    </>
  );
}
