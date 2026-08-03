import { Metadata } from 'next';
import StaysHero from '@/components/sections/stays/StaysHero';
import StaysList from '@/components/sections/stays/StaysList';
import HomeCTA from '@/components/sections/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Our Stays | Blue Bell Resort – Wayanad, Kerala',
  description: 'Choose from earthen domes with private pools, and Tree Hut or Tree Trunk rooms for two at Blue Bell Resort in Periya, Wayanad.',
  alternates: { canonical: '/stays' },
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
