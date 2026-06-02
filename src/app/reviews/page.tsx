import { Metadata } from 'next';
import ReviewsHero from '@/components/sections/reviews/ReviewsHero';
import ReviewsGrid from '@/components/sections/reviews/ReviewsGrid';
import HomeCTA from '@/components/sections/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Guest Reviews | Blue Bell Resort – Wayanad, Kerala',
  description: 'Read reviews and stories from guests who have experienced the magic, luxury, and authentic hospitality of Blue Bell Resort in Wayanad.',
};

export default function ReviewsPage() {
  return (
    <>
      <ReviewsHero />
      <ReviewsGrid />
      <HomeCTA />
    </>
  );
}
