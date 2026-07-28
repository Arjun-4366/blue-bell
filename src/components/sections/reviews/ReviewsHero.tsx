import PageHero from '../../layout/PageHero';
import domeImg from '@/images/dome/dome-10.webp';

export default function ReviewsHero() {
  return (
    <PageHero
      eyebrow="Guest Stories"
      heading="Voices of"
      headingItalic="Blue Bell."
      subtitle="Honest reflections from guests who chose to escape into Periya's forested highlands — and found something far beyond a holiday."
      imageSrc={domeImg.src}
      imageAlt="Private dome deck at Blue Bell"
      scopeClass="rev-hero"
    />
  );
}
