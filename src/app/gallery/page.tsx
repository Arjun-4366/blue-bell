import { Metadata } from 'next';
import GalleryHero from '@/components/sections/gallery/GalleryHero';
import GalleryGrid from '@/components/sections/gallery/GalleryGrid';
import HomeCTA from '@/components/sections/home/HomeCTA';
import { getSiteContent, getGalleryImages } from '@/services/api';

export const metadata: Metadata = {
  title: 'Gallery | Blue Bell Resort – Wayanad, Kerala',
  description: 'Browse photos of Blue Bell Resort — earthen domes, treehouses, private pools, campfire evenings, and the misty hills of Periya, Wayanad.',
  alternates: { canonical: '/gallery' },
};

export default async function GalleryPage() {
  const [siteContent, galleryImages] = await Promise.all([
    getSiteContent(),
    getGalleryImages(),
  ]);
  const heroData = siteContent?.galleryHero;

  return (
    <>
      <GalleryHero data={heroData} />
      <GalleryGrid images={galleryImages} />
      <HomeCTA />
    </>
  );
}
