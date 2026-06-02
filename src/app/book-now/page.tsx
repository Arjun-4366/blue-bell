import { Metadata } from 'next';
import BookNowHero from '@/components/sections/book-now/BookNowHero';
import BookNowForm from '@/components/sections/book-now/BookNowForm';

export const metadata: Metadata = {
  title: 'Book Now | Blue Bell Resort – Wayanad, Kerala',
  description: 'Book your luxury stay at Blue Bell Resort in Wayanad, Kerala. Select dates, choose rooms/villas, and send secure reservation requests.',
};

export default function BookNowPage() {
  return (
    <>
      <BookNowHero />
      <BookNowForm />
    </>
  );
}
