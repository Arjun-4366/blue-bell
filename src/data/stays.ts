import { StaticImageData } from 'next/image';

import dome2 from '@/images/dome/dome-2.webp';
import dome4 from '@/images/dome/dome-4.webp';
import dome5 from '@/images/dome/dome-5.webp';
import dome6 from '@/images/dome/dome-6.webp';
import dome13 from '@/images/dome/dome-13.jpeg';
import dome14 from '@/images/dome/dome-14.jpeg';
import dome15 from '@/images/dome/dome-15.jpeg';
import dome16 from '@/images/dome/dome-16.jpeg';
import dome17 from '@/images/dome/dome-17.jpeg';
import dome18 from '@/images/dome/dome-18.jpeg';
import dome19 from '@/images/dome/dome-19.webp';
import dome20 from '@/images/dome/dome-20.webp';
import treehouse2 from '@/images/treehouse/treehouse-2.webp';
import treehouse3 from '@/images/treehouse/treehouse-3.webp';
import treehouse6 from '@/images/treehouse/treehouse-6.webp';
import treehouse7 from '@/images/treehouse/treehouse-7.webp';
import treehouseroom1 from '@/images/treehouseroom/treehouseroom-1.webp';
import treehouseroom2 from '@/images/treehouseroom/treehouseroom-2.webp';
import treehouseroom3 from '@/images/treehouseroom/treehouseroom-3.webp';
import treehouseroom5 from '@/images/treehouseroom/treehouseroom-5.webp';
import treehouseroom7 from '@/images/treehouseroom/treehouseroom-7.webp';
import treehutB1 from '@/images/treehouseroom/treehut b1.jpeg';
import treehutB2 from '@/images/treehouseroom/treehut b2.jpeg';
import treehutB3 from '@/images/treehouseroom/treehut b3.jpeg';
import treetrunkA1 from '@/images/treehouseroom/treetrunk A1.jpeg';
import treetrunkA2 from '@/images/treehouseroom/treetrunk A2.jpeg';
import treetrunkA3 from '@/images/treehouseroom/treetrunk A3.jpeg';

export type CategorySlug = 'dome' | 'tree-hut' | 'tree-trunk';

export interface StayCategory {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
}

export const stayCategories: StayCategory[] = [
  {
    slug: 'dome',
    name: 'Dome Stays',
    shortName: 'Dome',
    description:
      "An escape into the serenity of the hills, where nature meets comfort. Dome living redefines the stay experience with elegant earthen interiors and thoughtfully designed spaces — perfect for those seeking peace, connection, and nature.",
  },
  {
    slug: 'tree-hut',
    name: 'The Tree Hut',
    shortName: 'Tree Hut',
    description:
      'Inspired by the beauty of nature, our three-floor Tree Hut houses three rooms on every level — each with a private washroom and full access to the swimming pool. A peaceful, elevated space for those seeking connection with the forest.',
  },
  {
    slug: 'tree-trunk',
    name: 'The Tree Trunk',
    shortName: 'Tree Trunk',
    description:
      'An exclusive three-floor structure designed for privacy and peace, surrounded by the beauty of nature. One elegant room on every floor, each with an attached washroom and pool access — a space crafted to feel heavenly and relaxed.',
  },
];

export interface Stay {
  slug: string;
  code: string;
  name: string;
  categorySlug: CategorySlug;
  tagline: string;
  rate: number;
  mealPlan: string;
  acType: 'AC' | 'Non-AC';
  minGuests: number;
  maxGuests: number;
  guestsLabel: string;
  hasPrivatePool: boolean;
  description: string;
  features: string[];
  inclusions: string[];
  images: StaticImageData[];
  featured?: boolean;
}

export const stays: Stay[] = [
  {
    slug: 'simbas-den',
    code: 'D1',
    name: "Simba's Den",
    categorySlug: 'dome',
    tagline: 'A perfect stay for couples.',
    rate: 7499,
    mealPlan: 'CP — breakfast & evening snacks',
    acType: 'AC',
    minGuests: 2,
    maxGuests: 2,
    guestsLabel: '2 Guests',
    hasPrivatePool: true,
    description:
      'A warm and luxurious retreat designed for comfort, featuring elegant interiors, a private washroom, and a peaceful ambiance with beautiful views of nature.',
    features: ['AC room', 'Private washroom', 'Private pool'],
    inclusions: [
      'Common campfire',
      'Private pool',
      'Indoor games (carrom & chess)',
      "Kids' park access",
      'Restaurant access',
      'BBQ facilities (charges apply)',
    ],
    images: [dome4,dome14,dome13,dome5],
    featured: false,
  },
  {
    slug: 'caesar-canopy',
    code: 'D2',
    name: 'Caesar Canopy',
    categorySlug: 'dome',
    tagline: 'A perfect stay for couples.',
    rate: 7499,
    mealPlan: 'CP — breakfast & evening snacks',
    acType: 'AC',
    minGuests: 2,
    maxGuests: 2,
    guestsLabel: '2 Guests',
    hasPrivatePool: true,
    description:
      'A beautifully designed luxury space that blends modern comfort with nature — a one-of-a-kind experience with refined interiors and your own private swimming pool, complemented by stunning panoramic views.',
    features: ['AC room', 'Private washroom', 'Private swimming pool'],
    inclusions: [
      'Common campfire',
      'Swimming pool access',
      'Private pool',
      'Indoor games (carrom & chess)',
      "Kids' park access",
      'Restaurant access',
      'BBQ facilities (charges apply)',
    ],
    images: [dome6, dome2, dome14, dome15],
    featured: true,
  },
  {
    slug: 'jings-dome',
    code: 'D3',
    name: "Jings Dome",
    categorySlug: 'dome',
    tagline: 'A perfect stay for couples.',
    rate: 7499,
    mealPlan: 'CP — breakfast & evening snacks',
    acType: 'AC',
    minGuests: 2,
    maxGuests: 2,
    guestsLabel: '2 Guests',
    hasPrivatePool: true,
    description:
      'Set within the same swimming-pool dome cluster as Caesar Canopy, Jings Dome pairs refined earthen interiors with a private pool and panoramic hill views — modern comfort wrapped in nature.',
    features: ['AC room', 'Private washroom', 'Private swimming pool'],
    inclusions: [
      'Common campfire',
      'Swimming pool access',
      'Private pool',
      'Indoor games (carrom & chess)',
      "Kids' park access",
      'Restaurant access',
      'BBQ facilities (charges apply)',
    ],
    images: [dome16, dome17, dome18],
    featured: false,
  },
  {
    slug: 'dumbo-vault',
    code: 'D4 & D5',
    name: 'Dumbo Vault',
    categorySlug: 'dome',
    tagline: 'Perfect stay for 4 — triple occupancy available.',
    rate: 14999,
    mealPlan: 'CP — breakfast & evening snacks',
    acType: 'AC',
    minGuests: 2,
    maxGuests: 4,
    guestsLabel: '4 Guests (Triple Occupancy Available)',
    hasPrivatePool: true,
    description:
      'Two beautifully designed dome stays — D4 and D5 — sharing a private pool between them, offering spacious comfort and a peaceful nature setting. Ideal for small families or groups of friends travelling together.',
    features: ['AC room', 'Private washroom', 'Shared private pool (2 domes)', 'Triple occupancy available (extra charges apply)'],
    inclusions: [
      'Common campfire',
      'Private pool (shared between D4 & D5)',
      'Indoor games (carrom & chess)',
      "Kids' park access",
      'Restaurant access',
      'BBQ facilities (charges apply)',
    ],
    images: [dome19, dome13, dome20, dome14],
    featured: true,
  },
  {
    slug: 'tree-hut-b1',
    code: 'B1',
    name: 'Tree Hut — B1',
    categorySlug: 'tree-hut',
    tagline: 'Perfect for family.',
    rate: 5499,
    mealPlan: 'CP — breakfast & evening tea, snacks',
    acType: 'AC',
    minGuests: 3,
    maxGuests: 4,
    guestsLabel: '3–4 Guests',
    hasPrivatePool: false,
    description:
      'One of three rooms in our three-floor Tree Hut, comfortably accommodating 3–4 guests with extra bed arrangements available for added convenience — a warm, elevated stay among the trees.',
    features: ['AC room', 'Private washroom', 'Private balcony'],
    inclusions: [
      'Common campfire',
      'Swimming pool access',
      'Indoor games (carrom & chess)',
      "Kids' park access",
      'Restaurant access',
      'BBQ facilities (charges apply)',
    ],
    images: [treehutB1, treehouse2, treehouse3, treehouseroom1, treehouseroom3, treehouseroom5, treehouseroom7],
    featured: true,
  },
  {
    slug: 'tree-hut-b2',
    code: 'B2',
    name: 'Tree Hut — B2',
    categorySlug: 'tree-hut',
    tagline: 'Perfect for family.',
    rate: 5499,
    mealPlan: 'CP — breakfast & evening tea, snacks',
    acType: 'AC',
    minGuests: 3,
    maxGuests: 4,
    guestsLabel: '3–4 Guests',
    hasPrivatePool: false,
    description:
      'One of three rooms in our three-floor Tree Hut, comfortably accommodating 3–4 guests with extra bed arrangements available for added convenience — a warm, elevated stay among the trees.',
    features: ['AC room', 'Private washroom', 'Private balcony'],
    inclusions: [
      'Common campfire',
      'Swimming pool access',
      'Indoor games (carrom & chess)',
      "Kids' park access",
      'Restaurant access',
      'BBQ facilities (charges apply)',
    ],
    images: [treehutB2, treehouseroom1, treehouseroom3, treehouseroom5, treehouseroom7, treehouse2, treehouse3],
    featured: false,
  },
  {
    slug: 'tree-hut-b3',
    code: 'B3',
    name: 'Tree Hut — B3',
    categorySlug: 'tree-hut',
    tagline: 'Perfect for family.',
    rate: 5499,
    mealPlan: 'CP — breakfast & evening tea, snacks',
    acType: 'AC',
    minGuests: 3,
    maxGuests: 4,
    guestsLabel: '3–4 Guests',
    hasPrivatePool: false,
    description:
      'One of three rooms in our three-floor Tree Hut, comfortably accommodating 3–4 guests with extra bed arrangements available for added convenience — a warm, elevated stay among the trees.',
    features: ['AC room', 'Private washroom', 'Private balcony'],
    inclusions: [
      'Common campfire',
      'Swimming pool access',
      'Indoor games (carrom & chess)',
      "Kids' park access",
      'Restaurant access',
      'BBQ facilities (charges apply)',
    ],
    images: [treehutB3, treehouseroom5, treehouseroom7, treehouse2, treehouse3, treehouseroom1, treehouseroom3],
    featured: false,
  },
  {
    slug: 'tree-trunk-a1',
    code: 'A1',
    name: 'Tree Trunk — A1',
    categorySlug: 'tree-trunk',
    tagline: 'Made for two.',
    rate: 4499,
    mealPlan: 'CP — breakfast & evening tea, snacks',
    acType: 'Non-AC',
    minGuests: 2,
    maxGuests: 2,
    guestsLabel: '2 Guests',
    hasPrivatePool: false,
    description:
      'Part of our exclusive three-floor Tree Trunk house, thoughtfully crafted for a peaceful, comfortable stay for two — with an attached washroom and full access to the swimming pool.',
    features: ['Non-AC room', 'Private washroom'],
    inclusions: [
      'Common campfire',
      'Swimming pool access',
      'Indoor games (carrom & chess)',
      "Kids' park access",
      'Restaurant access',
      'BBQ facilities (charges apply)',
    ],
    images: [treetrunkA1, treehouseroom1, treehouseroom2, treehouseroom3, treehouse6, treehouse7],
    featured: false,
  },
  {
    slug: 'tree-trunk-a2',
    code: 'A2',
    name: 'Tree Trunk — A2',
    categorySlug: 'tree-trunk',
    tagline: 'Made for two.',
    rate: 4499,
    mealPlan: 'CP — breakfast & evening tea, snacks',
    acType: 'Non-AC',
    minGuests: 2,
    maxGuests: 2,
    guestsLabel: '2 Guests',
    hasPrivatePool: false,
    description:
      'Part of our exclusive three-floor Tree Trunk house, thoughtfully crafted for a peaceful, comfortable stay for two — with an attached washroom and full access to the swimming pool.',
    features: ['Non-AC room', 'Private washroom'],
    inclusions: [
      'Common campfire',
      'Swimming pool access',
      'Indoor games (carrom & chess)',
      "Kids' park access",
      'Restaurant access',
      'BBQ facilities (charges apply)',
    ],
    images: [treetrunkA2, treehouseroom3, treehouse6, treehouse7, treehouseroom1, treehouseroom2],
    featured: false,
  },
  {
    slug: 'tree-trunk-a3',
    code: 'A3',
    name: 'Tree Trunk — A3',
    categorySlug: 'tree-trunk',
    tagline: 'Made for two.',
    rate: 4499,
    mealPlan: 'CP — breakfast & evening tea, snacks',
    acType: 'AC',
    minGuests: 2,
    maxGuests: 2,
    guestsLabel: '2 Guests',
    hasPrivatePool: false,
    description:
      'Part of our exclusive three-floor Tree Trunk house, thoughtfully crafted for a peaceful, comfortable stay for two — with an attached washroom, a private balcony, and full access to the swimming pool.',
    features: ['AC room', 'Private washroom', 'Private balcony'],
    inclusions: [
      'Common campfire',
      'Swimming pool access',
      'Indoor games (carrom & chess)',
      "Kids' park access",
      'Restaurant access',
      'BBQ facilities (charges apply)',
    ],
    images: [treetrunkA3, treehouse7, treehouseroom1, treehouseroom2, treehouseroom3, treehouse6],
    featured: true,
  },
];

export function getStayBySlug(slug: string): Stay | undefined {
  return stays.find((s) => s.slug === slug);
}

export function getStaysByCategory(categorySlug: CategorySlug): Stay[] {
  return stays.filter((s) => s.categorySlug === categorySlug);
}

export function getCategory(categorySlug: CategorySlug): StayCategory {
  return stayCategories.find((c) => c.slug === categorySlug)!;
}

export const featuredStays = stays.filter((s) => s.featured);

export function formatRate(rate: number): string {
  return `₹${rate.toLocaleString('en-IN')}`;
}
