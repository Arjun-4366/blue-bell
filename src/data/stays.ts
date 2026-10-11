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
import d1Pool from '@/images/dome/D1 pool.jpeg';
import d2Pool from '@/images/dome/D2 pool.jpeg';
import d3Pool from '@/images/dome/D3 pool.jpeg';
import d4d5Pool from '@/images/dome/D4&D5 pool.jpeg';
// Shared/common shots — swapped: these actually depict the Tree Hut structure,
// not Tree Trunk (previously misassigned), so they're used on the Tree Hut rooms.
import treehouse6 from '@/images/treehouse/treehouse-2.webp';//2,3
import treehouse7 from '@/images/treehouse/treehouse-3.webp';
// Shared/common shots that actually depict the Tree Trunk structure.
import treehouse2 from '@/images/treehouse/treehouse-6.webp';//6,7
import treehouse3 from '@/images/treehouse/treehouse-7.webp';

import treehutB1_1 from '@/images/treehouseroom/treehut/treehut B1 -1.jpeg';
import treehutB2_1 from '@/images/treehouseroom/treehut/treehut B2-1.webp';
import treehutB2_2 from '@/images/treehouseroom/treehut/treehut B2-2.webp';
import treehutB2_3 from '@/images/treehouseroom/treehut/treehut B2-3.jpeg';
import treehutB3_1 from '@/images/treehouseroom/treehut/treehut B3-1.jpeg';

import treetrunkA1_1 from '@/images/treehouseroom/treetrunk/treetrunk A1-1.webp';
import treetrunkA1_2 from '@/images/treehouseroom/treetrunk/treetrunk A1-2.jpeg';
import treetrunkA2_1 from '@/images/treehouseroom/treetrunk/treetrunk A2-1.webp';
import treetrunkA2_2 from '@/images/treehouseroom/treetrunk/treetrunk A2-2.webp';
import treetrunkA2_4 from '@/images/treehouseroom/treetrunk/treetrunk A2-4.jpeg';
import treetrunkA3_1 from '@/images/treehouseroom/treetrunk/treetrunk A3-1.webp';
import treetrunkA3_2 from '@/images/treehouseroom/treetrunk/treetrunk A3-2.jpeg';

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
    description: `Our private pool domes with AC are designed especially for couples who want more privacy, peace, and time together. Domes 1, 2, and 3 each come with their own private pool, giving you a quiet space to relax and enjoy your stay at your own pace.

Domes 4 and 5, with access to a common pool, are ideal for families looking to spend quality time together in a fun and comfortable setting.

Each dome has its own animal-inspired theme and makes every stay a little different. Whether you’re enjoying a private swim, relaxing inside, or simply spending time together away from the busy routine, the domes are made for slowing down.

Come for a few quiet days, enjoy the privacy, and make memories.`,
  },
  {
    slug: 'tree-hut',
    name: 'The Tree Hut',
    shortName: 'Tree Hut',
    description: `Our Tree Hut is built right among the trees, giving you that feeling of being away from everything while still having the comfort you need.

The tree hut has 3 comfortable AC rooms — B1, B2 & B3, each with a private washroom and a cozy setup for a relaxing stay. The rooms can accommodate 2–4 guests, making them comfortable not only for couples but also for small families.`,
  },
  {
    slug: 'tree-trunk',
    name: 'The Tree Trunk',
    shortName: 'Tree Trunk',
    description: `Each Tree Trunk has 3 comfortable rooms — A1, A2 and A3, arranged across three floors. Each comes with a private attached washroom and is designed especially for two guests, making it a lovely choice for couples looking for a peaceful escape.

The beauty of Tree Trunk is in its simplicity — the warmth of the room, the feeling of being surrounded by nature, and the privacy that makes the whole place feel a little more personal.

It’s not just about staying in a treehouse.

It’s about waking up somewhere different, having your own little corner in the trees, and sharing those quiet moments with someone special.`,
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
    images: [dome4, dome14, dome13, dome5, d1Pool],
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
    images: [dome6, dome2, dome14, dome15, d2Pool],
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
    images: [dome16, dome17, dome18, d3Pool],
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
    images: [dome19, dome13, dome20, dome14, d4d5Pool],
    featured: true,
  },
  {
    slug: 'tree-hut-b1',
    code: 'B1',
    name: 'Tree Hut — B1',
    categorySlug: 'tree-hut',
    tagline: 'Made for two.',
    rate: 5499,
    mealPlan: 'CP — breakfast & evening tea, snacks',
    acType: 'AC',
    minGuests: 2,
    maxGuests: 2,
    guestsLabel: '2 Guests',
    hasPrivatePool: false,
    description:
      'One of three rooms in our three-floor Tree Hut, thoughtfully designed for a comfortable, air-conditioned stay for two — a warm, elevated stay among the trees.',
    features: ['AC room', 'Private washroom', 'Private balcony'],
    inclusions: [
      'Common campfire',
      'Swimming pool access',
      'Indoor games (carrom & chess)',
      "Kids' park access",
      'Restaurant access',
      'BBQ facilities (charges apply)',
    ],
    images: [treehouse6,treehutB1_1, treehouse7],
    featured: true,
  },
  {
    slug: 'tree-hut-b2',
    code: 'B2',
    name: 'Tree Hut — B2',
    categorySlug: 'tree-hut',
    tagline: 'Made for two.',
    rate: 5499,
    mealPlan: 'CP — breakfast & evening tea, snacks',
    acType: 'AC',
    minGuests: 2,
    maxGuests: 2,
    guestsLabel: '2 Guests',
    hasPrivatePool: false,
    description:
      'One of three rooms in our three-floor Tree Hut, thoughtfully designed for a comfortable, air-conditioned stay for two — a warm, elevated stay among the trees.',
    features: ['AC room', 'Private washroom', 'Private balcony'],
    inclusions: [
      'Common campfire',
      'Swimming pool access',
      'Indoor games (carrom & chess)',
      "Kids' park access",
      'Restaurant access',
      'BBQ facilities (charges apply)',
    ],
    images: [treehutB2_1, treehutB2_2,treehouse6, treehutB2_3, treehouse7],
    featured: false,
  },
  {
    slug: 'tree-hut-b3',
    code: 'B3',
    name: 'Tree Hut — B3',
    categorySlug: 'tree-hut',
    tagline: 'Made for two.',
    rate: 5499,
    mealPlan: 'CP — breakfast & evening tea, snacks',
    acType: 'AC',
    minGuests: 2,
    maxGuests: 2,
    guestsLabel: '2 Guests',
    hasPrivatePool: false,
    description:
      'One of three rooms in our three-floor Tree Hut, thoughtfully designed for a comfortable, air-conditioned stay for two — a warm, elevated stay among the trees.',
    features: ['AC room', 'Private washroom', 'Private balcony'],
    inclusions: [
      'Common campfire',
      'Swimming pool access',
      'Indoor games (carrom & chess)',
      "Kids' park access",
      'Restaurant access',
      'BBQ facilities (charges apply)',
    ],
    images: [treehutB3_1, treehouse6, treehouse7],
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
    images: [treehouse2,treetrunkA1_1, treetrunkA1_2, treehouse3],
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
    images: [treehouse3,treetrunkA2_1, treetrunkA2_2, treetrunkA2_4, treehouse2 ],
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
    images: [treetrunkA3_1, treetrunkA3_2, treehouse3,treehouse2 ],
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
