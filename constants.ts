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
    image: '/assets/strawberry-sparkle.jpg',
    color: 'bg-bubblegum'
  },
  {
    id: '2',
    name: 'Midnight Oreo-Queen',
    description: 'Decadent dark chocolate ganache topped with real crushed Oreo crumbles for the ultimate cocoa experience.',
    image: '/assets/oreo-queen.jpg',
    color: 'bg-gray-200'
  },
  {
    id: '3',
    name: 'Biscoff Magic',
    description: 'Golden-pressed buttery goodness topped with smooth Biscoff spread, caramelized cookie crumbs, and a whole Lotus biscuit.',
    image: '/assets/biscoff-magic.jpg',
    color: 'bg-mint'
  },
  {
    id: '4',
    name: 'Just sweet',
    description: 'Pure, simple, and perfectly flaky. Glazed with our signature light honey syrup and a dusting of fine sugar.',
    image: '/assets/just-sweet.jpg',
    color: 'bg-lavender'
  }
];