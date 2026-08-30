import { Metadata } from 'next';
import AboutHero from '@/components/sections/about/AboutHero';
import AboutStory from '@/components/sections/about/AboutStory';
import AboutValues from '@/components/sections/about/AboutValues';
import HomeCTA from '@/components/sections/home/HomeCTA';
import { getSiteContent } from '@/services/api';

export const metadata: Metadata = {
  title: 'About Us | Blue Bell Resort – Wayanad, Kerala',
  description: 'Learn the story of Blue Bell Resort — treehouses, tree huts, and private-pool domes in Periya, Wayanad, since 2020.',
  alternates: { canonical: '/about' },
};

export default async function AboutPage() {
  const siteContent = await getSiteContent();
  const aboutPageData = siteContent?.aboutPage;

  return (
    <>
      <AboutHero data={aboutPageData} />
      <AboutStory data={aboutPageData} />
      <AboutValues data={aboutPageData} />
      <HomeCTA />
    </>
  );
}
