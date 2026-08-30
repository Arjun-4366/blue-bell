import { Metadata } from 'next';
import ReviewsHero from '@/components/sections/reviews/ReviewsHero';
// import GoogleReviewsWidget from '@/components/sections/reviews/GoogleReviewsWidget';
import ReviewsGrid from '@/components/sections/reviews/ReviewsGrid';
import { getSiteContent, getReviews } from '@/services/api';
import HomeCTA from '@/components/sections/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Guest Reviews | Blue Bell Resort – Wayanad, Kerala',
  description: 'Read reviews and stories from guests who have stayed in Blue Bell\'s treehouses and private-pool domes in Periya, Wayanad.',
  alternates: { canonical: '/reviews' },
};

export default async function ReviewsPage() {
  const [siteContent, reviews] = await Promise.all([
    getSiteContent(),
    getReviews(),
  ]);
  const heroData = siteContent?.reviewsHero;

  return (
    <>
      <ReviewsHero data={heroData} />
      {/* <GoogleReviewsWidget /> */}
      <ReviewsGrid reviews={reviews} />
      <HomeCTA />
    </>
  );
}
