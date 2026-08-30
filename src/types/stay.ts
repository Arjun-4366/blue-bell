/** Mirrors bluebell-backend stay.model.ts */

export type CategorySlug = 'dome' | 'tree-hut' | 'tree-trunk';
export type AcType = 'AC' | 'Non-AC';

export interface StayCategory {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
}


export interface Stay {
  _id: string;
  slug: string;
  code: string;
  name: string;
  categorySlug: CategorySlug;
  tagline: string;
  rate: number;
  mealPlan: string;
  acType: AcType;
  minGuests: number;
  maxGuests: number;
  guestsLabel: string;
  hasPrivatePool: boolean;
  description: string;
  features: string[];
  inclusions: string[];
  images: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}
