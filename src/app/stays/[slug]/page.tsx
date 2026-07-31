import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { stays, getStayBySlug, getCategory } from '@/data/stays';
import StayDetailHero from '@/components/sections/stays/StayDetailHero';
import StayDetailInfo from '@/components/sections/stays/StayDetailInfo';
import HomeCTA from '@/components/sections/home/HomeCTA';

interface StayPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return stays.map((stay) => ({ slug: stay.slug }));
}

export async function generateMetadata({ params }: StayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const stay = getStayBySlug(slug);
  if (!stay) return {};

  return {
    title: `${stay.name} | Blue Bell Resort – Wayanad, Kerala`,
    description: stay.description,
  };
}

export default async function StayDetailPage({ params }: StayPageProps) {
  const { slug } = await params;
  const stay = getStayBySlug(slug);
  if (!stay) notFound();

  const category = getCategory(stay.categorySlug);

  return (
    <>
      <StayDetailHero stay={stay} category={category} />
      <StayDetailInfo stay={stay} />
      <HomeCTA />
    </>
  );
}
