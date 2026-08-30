const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000/api';

export const ENDPOINTS = {
  // site content (singleton)
  GET_SITE_CONTENT: `${API_BASE_URL}/site-content`,

  // stays
  GET_STAYS: `${API_BASE_URL}/stays`,
  GET_STAY: (id: string) => `${API_BASE_URL}/stays/${id}`,

  // amenities
  GET_AMENITIES: `${API_BASE_URL}/amenities`,
  GET_AMENITY: (id: string) => `${API_BASE_URL}/amenities/${id}`,

  // events
  GET_EVENTS: `${API_BASE_URL}/events`,
  GET_EVENT: (id: string) => `${API_BASE_URL}/events/${id}`,

  // gallery
  GET_GALLERY_IMAGES: `${API_BASE_URL}/gallery`,
  GET_GALLERY_IMAGE: (id: string) => `${API_BASE_URL}/gallery/${id}`,

  // reviews
  GET_REVIEWS: `${API_BASE_URL}/reviews`,
  GET_REVIEW: (id: string) => `${API_BASE_URL}/reviews/${id}`,

  // faqs
  GET_FAQS: `${API_BASE_URL}/faqs`,
  GET_FAQ: (id: string) => `${API_BASE_URL}/faqs/${id}`,
};
