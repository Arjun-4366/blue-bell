import { Metadata } from 'next';
import EventsHero from '@/components/sections/events/EventsHero';
import EventsList from '@/components/sections/events/EventsList';
import HomeCTA from '@/components/sections/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Events & Experiences | Blue Bell Resort – Wayanad, Kerala',
  description: 'Join spice plantation walks, yoga retreats, cultural Kathakali performances, and culinary workshops at Blue Bell Resort in Wayanad.',
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsList />
      <HomeCTA />
    </>
  );
}
