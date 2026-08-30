/** Mirrors bluebell-backend gallery.model.ts */

export type GalleryCategory =
  | 'Dome'
  | 'Tree Hut'
  | 'Tree Trunk'
  | 'Amenities'
  | 'Events'
  | 'Dining'
  | 'Nature';

export interface GalleryImage {
  _id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  alt: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Dome',
  'Tree Hut',
  'Tree Trunk',
  'Amenities',
  'Events',
  'Dining',
  'Nature',
];
