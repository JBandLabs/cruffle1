import { CruffleFlavor, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Shop', href: '#' },
  { label: 'Our Story', href: '#story' },
  { label: 'Flavors', href: '#lineup' },
  { label: 'Locations', href: '#' },
];

export const FLAVORS: CruffleFlavor[] = [
  {
    id: '1',
    name: 'Strawberry Sparkle',
    description: 'Fresh strawberry jewels and silky white chocolate drizzle on our signature flaky golden-pressed cruffle.',
    image: 'https://images.unsplash.com/photo-1662112441014-e2293427f717?q=80&w=800&auto=format&fit=crop',
    color: 'bg-bubblegum'
  },
  {
    id: '2',
    name: 'Midnight Oreo-Queen',
    description: 'Decadent dark chocolate ganache topped with real crushed Oreo crumbles for the ultimate cocoa experience.',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop',
    color: 'bg-gray-200'
  },
  {
    id: '3',
    name: 'Biscoff Magic',
    description: 'Golden-pressed buttery goodness topped with smooth Biscoff spread, caramelized cookie crumbs, and a whole Lotus biscuit.',
    image: 'https://images.unsplash.com/photo-1621614931326-78e88860269f?q=80&w=800&auto=format&fit=crop',
    color: 'bg-mint'
  },
  {
    id: '4',
    name: 'Just sweet',
    description: 'Pure, simple, and perfectly flaky. Glazed with our signature light honey syrup and a dusting of fine sugar.',
    image: 'https://images.unsplash.com/photo-1654605051065-9f5e27a760e7?q=80&w=800&auto=format&fit=crop',
    color: 'bg-lavender'
  }
];