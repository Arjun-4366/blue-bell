import Hero from '@/components/sections/home/Hero';
import HomeAbout from '@/components/sections/home/HomeAbout';
import HomeLocation from '@/components/sections/home/HomeLocation';
import HomeAmenities from '@/components/sections/home/HomeAmenities';
import HomeGallery from '@/components/sections/home/HomeGallery';
import HomeReviews from '@/components/sections/home/HomeReviews';
import HomeFAQ from '@/components/sections/home/HomeFAQ';
import HomeCTA from '@/components/sections/home/HomeCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeLocation />
      <HomeAmenities />
      <HomeGallery />
      <HomeReviews />
      <HomeFAQ />
      <HomeCTA />
    </>
  );
}
