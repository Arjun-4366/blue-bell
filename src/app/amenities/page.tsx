import { Metadata } from 'next';
import AmenitiesHero from '../components/sections/amenities/AmenitiesHero';
import AmenitiesGrid from '../components/sections/amenities/AmenitiesGrid';
import HomeCTA from '../components/sections/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Amenities | Blue Bell Resort – Wayanad, Kerala',
  description: 'Discover world-class amenities at Blue Bell Resort: Ayurveda spa, infinity pool, organic dining, nature trails, and more in the heart of Wayanad.',
};

export default function AmenitiesPage() {
  return (
    <>
      <AmenitiesHero />
      <AmenitiesGrid />
      <HomeCTA />
    </>
  );
}
