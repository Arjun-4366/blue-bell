import { Metadata } from 'next';
import AmenitiesHero from '@/components/sections/amenities/AmenitiesHero';
import AmenitiesOverview from '@/components/sections/amenities/AmenitiesOverview';
import AmenitiesGrid from '@/components/sections/amenities/AmenitiesGrid';
import HomeCTA from '@/components/sections/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Amenities | Blue Bell Resort – Wayanad, Kerala',
  description: 'Amenities at Blue Bell Resort: evening campfires, barbecue nights, a kids\' play park, and an indoor games room — simple, easy-going additions to your stay in Wayanad.',
};

export default function AmenitiesPage() {
  return (
    <>
      <AmenitiesHero />
      {/* <AmenitiesOverview /> */}
      <AmenitiesGrid />
      <HomeCTA />
    </>
  );
}
