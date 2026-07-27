import { Metadata } from 'next';
import AboutHero from '@/components/sections/about/AboutHero';
import AboutStory from '@/components/sections/about/AboutStory';
import AboutValues from '@/components/sections/about/AboutValues';
import HomeCTA from '@/components/sections/home/HomeCTA';

export const metadata: Metadata = {
  title: 'About Us | Blue Bell Resort – Wayanad, Kerala',
  description: 'Learn the story of Blue Bell Resort — treehouses, tree huts, and private-pool domes on 5.5 acres in Periya, Wayanad, since 2020.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <HomeCTA />
    </>
  );
}
