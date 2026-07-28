import PageHero from '../../layout/PageHero';
import treehouseImg from '@/images/treehouse/treehouse-7.webp';

export default function AboutHero() {
  return (
    <PageHero
      eyebrow="Our Story"
      heading="Born from the"
      headingItalic="Heart of Wayanad."
      subtitle="Treehouses, tree huts, and private-pool domes tucked into Periya, Wayanad's quieter northern belt — rooted here since 2020."
      imageSrc={treehouseImg.src}
      imageAlt="Treehouse at Blue Bell surrounded by Wayanad forest"
      scopeClass="about-hero"
    />
  );
}
