import { Metadata } from 'next';
import StaysHero from '@/components/sections/stays/StaysHero';
import StaysList from '@/components/sections/stays/StaysList';
import HomeCTA from '@/components/sections/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Our Stays | Blue Bell Resort – Wayanad, Kerala',
  description: 'Choose from forest villas, treehouse suites, heritage cottages, and family bungalows at Blue Bell Resort in Wayanad.',
};

export default function StaysPage() {
  return (
    <>
      <StaysHero />
      <StaysList />
      <HomeCTA />
    </>
  );
}
