import { Metadata } from 'next';
import AboutHero from '../components/sections/about/AboutHero';
import AboutStory from '../components/sections/about/AboutStory';
import AboutValues from '../components/sections/about/AboutValues';
import HomeCTA from '../components/sections/home/HomeCTA';

export const metadata: Metadata = {
  title: 'About Us | Blue Bell Resort – Wayanad, Kerala',
  description: 'Learn the story of Blue Bell Resort — 15 years of sustainable luxury, authentic hospitality, and deep-rooted love for Wayanad\'s natural beauty.',
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
