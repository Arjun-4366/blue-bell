import { Metadata } from 'next';
import AmenitiesHero from '@/components/sections/amenities/AmenitiesHero';
import AmenitiesOverview from '@/components/sections/amenities/AmenitiesOverview';
import AmenitiesGrid from '@/components/sections/amenities/AmenitiesGrid';
import HomeCTA from '@/components/sections/home/HomeCTA';
import { getSiteContent, getAmenities } from '@/services/api';

export const metadata: Metadata = {
  title: 'Amenities | Blue Bell Resort – Wayanad, Kerala',
  description: 'Amenities at Blue Bell Resort: evening campfires, barbecue nights, a kids\' play park, and an indoor games room — simple, easy-going additions to your stay in Wayanad.',
  alternates: { canonical: '/amenities' },
};

export default async function AmenitiesPage() {
  const [siteContent, amenities] = await Promise.all([
    getSiteContent(),
    getAmenities(),
  ]);
  const heroData = siteContent?.amenitiesHero;

  return (
    <>
      <AmenitiesHero data={heroData} />
      {/* <AmenitiesOverview /> */}
      <AmenitiesGrid amenities={amenities} />
      <HomeCTA />
    </>
  );
}
