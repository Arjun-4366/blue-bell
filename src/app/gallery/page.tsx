import { Metadata } from 'next';
import GalleryHero from '@/components/sections/gallery/GalleryHero';
import GalleryGrid from '@/components/sections/gallery/GalleryGrid';
import HomeCTA from '@/components/sections/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Gallery | Blue Bell Resort – Wayanad, Kerala',
  description: 'Browse photos of Blue Bell Resort — earthen domes, treehouses, private pools, campfire evenings, and the misty hills of Periya, Wayanad.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <HomeCTA />
    </>
  );
}
