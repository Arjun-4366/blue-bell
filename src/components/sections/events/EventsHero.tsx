import PageHero from '../../layout/PageHero';
import eventImg from '@/images/events/events-3.webp';

export default function EventsHero() {
  return (
    <PageHero
      eyebrow="Curated Experiences"
      heading="Events &"
      headingItalic="Happenings."
      subtitle="Immerse yourself in Kerala's living culture — from spice trail walks and sunrise yoga to Kathakali evenings and private forest celebrations."
      imageSrc={eventImg.src}
      imageAlt="Guests gathered at a Blue Bell event"
      scopeClass="evt-hero"
    />
  );
}
