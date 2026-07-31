import PageHero from '../../layout/PageHero';
import diningImg from '@/images/dining/dining-4.webp';

export default function BookNowHero() {
  return (
    <PageHero
      eyebrow="Direct Booking"
      heading="Reserve Your"
      headingItalic="Sanctuary."
      subtitle="Book direct to secure our best guaranteed rate, a complimentary welcome massage, and flexible cancellation up to 14 days out."
      imageSrc={diningImg.src}
      imageAlt="Dining setup at Blue Bell Resort"
      scopeClass="bk-hero"
    />
  );
}
