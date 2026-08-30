/** Mirrors bluebell-backend review.model.ts */

export type ReviewSource = 'Google' | 'Manual';

export interface Review {
  _id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  source: ReviewSource;
  published: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}
