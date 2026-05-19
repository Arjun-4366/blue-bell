import Hero from './components/sections/home/Hero';
import HomeAbout from './components/sections/home/HomeAbout';
import FeaturedStays from './components/sections/home/FeaturedStays';
import HomeAmenities from './components/sections/home/HomeAmenities';
import HomeGallery from './components/sections/home/HomeGallery';
import HomeReviews from './components/sections/home/HomeReviews';
import HomeEvents from './components/sections/home/HomeEvents';
import HomeFAQ from './components/sections/home/HomeFAQ';
import HomeCTA from './components/sections/home/HomeCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <FeaturedStays />
      <HomeAmenities />
      <HomeGallery />
      <HomeReviews />
      <HomeEvents />
      <HomeFAQ />
      <HomeCTA />
    </>
  );
}
