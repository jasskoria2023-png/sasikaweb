export interface CorporatePackage {
  id: string;
  title: string;
  destination: string;
  image: string;
  description: string;
  duration: string;
  category: string;
  highlights: string[];
}

export const corporatePackages: CorporatePackage[] = [
  {
    id: 'singapore-tech-innovation-summit',
    title: 'Singapore Tech & Innovation Summit',
    destination: 'Singapore',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800',
    description:
      'Ideal for corporate delegations. Includes 5-star business stays, Marina Bay event venues, tech park tours, and private airport transfers.',
    duration: '5 Days / 4 Nights',
    category: 'Delegation & Trade',
    highlights: ['MICE Venues', 'Fast-track Visas', 'Gala Dinner Setup'],
  },
  {
    id: 'swiss-alps-leadership-retreat',
    title: 'Swiss Alps Leadership Retreat',
    destination: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800',
    description:
      'Executive leadership retreat featuring private chalet accommodation, high-speed Glacier Express passes, and curated team strategy sessions.',
    duration: '7 Days / 6 Nights',
    category: 'Executive Retreat',
    highlights: ['Private Chalet', 'Alpine Excursions', 'Strategy Hubs'],
  },
  {
    id: 'japan-corporate-excellence-tour',
    title: 'Japan Corporate Excellence Tour',
    destination: 'Tokyo & Kyoto',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    description:
      'Combine high-tech facility visits with cultural team bonding. Shinkansen bullet train passes, VIP dining, and dedicated ground handlers.',
    duration: '8 Days / 7 Nights',
    category: 'Incentive Travel',
    highlights: ['Shinkansen Passes', 'Cultural Bonding', 'Dedicated Escort'],
  },
  {
    id: 'dubai-mice-expo-vip-package',
    title: 'Dubai MICE & Expo VIP Package',
    destination: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    description:
      'Premium incentive program with Burj Khalifa VIP access, private desert gala dinners, luxury yacht charters, and convention support.',
    duration: '4 Days / 3 Nights',
    category: 'Incentives & Expo',
    highlights: ['Yacht Charter', 'Desert Gala', 'Convention Passes'],
  },
];

export const toCorporatePackageSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
