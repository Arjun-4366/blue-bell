import { Metadata } from 'next';
import BookNowHero from '@/components/sections/book-now/BookNowHero';
import BookNowForm from '@/components/sections/book-now/BookNowForm';
import { getSiteContent, getStays } from '@/services/api';

export const metadata: Metadata = {
  title: 'Book Now | Blue Bell Resort – Wayanad, Kerala',
  description: 'Book your stay at Blue Bell Resort in Wayanad, Kerala. Select dates, choose from our domes, tree huts, and tree trunk rooms, and send a direct reservation request.',
  alternates: { canonical: '/book-now' },
};

export default async function BookNowPage() {
  const [siteContent, stays] = await Promise.all([
    getSiteContent(),
    getStays(),
  ]);
  const heroData = siteContent?.bookNowHero;

  return (
    <>
      <BookNowHero data={heroData} />
      <BookNowForm stays={stays} />
    </>
  );
}
