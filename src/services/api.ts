import { apiFetch } from '@/lib/api';
import { ENDPOINTS } from '@/lib/endpoints';
import { ISingleResponse, IPaginatedResponse } from '@/types/common';
import { SiteContentDocument } from '@/types/siteContent';
import { Stay } from '@/types/stay';
import { Amenity } from '@/types/amenity';
import { GalleryImage } from '@/types/gallery';
import { Review } from '@/types/review';
import { Faq } from '@/types/faq';

export const getSiteContent = async (): Promise<SiteContentDocument> => {
  try {
    const res = await apiFetch<ISingleResponse<SiteContentDocument>>(ENDPOINTS.GET_SITE_CONTENT, {
      next: { revalidate: 3600, tags: ['site-content'] },
    });
    return res.data;
  } catch (error) {
    console.error('Failed to get site content:', error);
    return {} as SiteContentDocument;
  }
};

export const getStays = async (): Promise<Stay[]> => {
  try {
    const res = await apiFetch<IPaginatedResponse<Stay>>(ENDPOINTS.GET_STAYS, {
      next: { revalidate: 300, tags: ['stays'] },
    });
    return res.data;
  } catch (error) {
    console.error('Failed to get stays:', error);
    return [];
  }
};

export const getAmenities = async (): Promise<Amenity[]> => {
  try {
    const res = await apiFetch<IPaginatedResponse<Amenity>>(ENDPOINTS.GET_AMENITIES, {
      next: { revalidate: 300, tags: ['amenities'] },
    });
    return res.data;
  } catch (error) {
    console.error('Failed to get amenities:', error);
    return [];
  }
};

export const getGalleryImages = async (): Promise<GalleryImage[]> => {
  try {
    const res = await apiFetch<IPaginatedResponse<GalleryImage>>(ENDPOINTS.GET_GALLERY_IMAGES, {
      next: { revalidate: 300, tags: ['gallery'] },
    });
    return res.data;
  } catch (error) {
    console.error('Failed to get gallery images:', error);
    return [];
  }
};

export const getReviews = async (): Promise<Review[]> => {
  try {
    const res = await apiFetch<IPaginatedResponse<Review>>(ENDPOINTS.GET_REVIEWS, {
      next: { revalidate: 300, tags: ['reviews'] },
    });
    return res.data;
  } catch (error) {
    console.error('Failed to get reviews:', error);
    return [];
  }
};

export const getFaqs = async (): Promise<Faq[]> => {
  try {
    const res = await apiFetch<IPaginatedResponse<Faq>>(ENDPOINTS.GET_FAQS, {
      next: { revalidate: 3600, tags: ['faqs'] },
    });
    return res.data;
  } catch (error) {
    console.error('Failed to get faqs:', error);
    return [];
  }
};
