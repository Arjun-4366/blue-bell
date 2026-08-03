import { MetadataRoute } from 'next';
import { stays } from '@/data/stays';

const BASE_URL = 'https://bluebellwayand.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/stays`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/amenities`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/gallery`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/reviews`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/book-now`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE_URL}/terms-of-service`, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const stayRoutes: MetadataRoute.Sitemap = stays.map((stay) => ({
    url: `${BASE_URL}/stays/${stay.slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...stayRoutes];
}
