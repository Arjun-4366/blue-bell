/** Mirrors bluebell-backend amenity.model.ts */

export interface Amenity {
  _id: string;
  title: string;
  category: string;
  accent: string;
  image: string;
  imageAlt: string;
  desc: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}
