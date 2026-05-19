import { Metadata } from 'next';
import GalleryHero from '../components/sections/gallery/GalleryHero';
import GalleryGrid from '../components/sections/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery | Blue Bell Resort – Wayanad, Kerala',
  description: 'Browse stunning photos of Blue Bell Resort — forest villas, infinity pool, Ayurveda spa, Kerala cuisine, and the beauty of Wayanad.',
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  );
}
