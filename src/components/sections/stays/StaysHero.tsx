import PageHero from '../../layout/PageHero';
import domeImg from '@/images/dome/dome-3.webp';

export default function StaysHero() {
  return (
    <PageHero
      eyebrow="Accommodations"
      heading="Your Perfect"
      headingItalic="Retreat Awaits."
      subtitle="From high-canopy treehouse suites to private earthen dome villas — six sanctuaries, each a world unto itself, deep in Periya's forested hills."
      imageSrc={domeImg.src}
      imageAlt="Private-pool earthen dome villa at Blue Bell"
      scopeClass="stays-hero"
    />
  );
}
