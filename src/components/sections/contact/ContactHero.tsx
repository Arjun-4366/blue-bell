import PageHero from '../../layout/PageHero';
import domeImg from '@/images/dome/dome-12.webp';

export default function ContactHero() {
  return (
    <PageHero
      eyebrow="Connect With Us"
      heading="We Are"
      headingItalic="Here For You."
      subtitle="Whether you wish to reserve a stay, plan a private celebration, or simply enquire — our Periya-based team is available around the clock."
      imageSrc={domeImg.src}
      imageAlt="Earthen dome villa at Blue Bell"
      scopeClass="con-hero"
    />
  );
}
