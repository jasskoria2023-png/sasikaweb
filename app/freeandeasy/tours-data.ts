export interface FreeAndEasyTour {
  id: string;
  title: string;
  destination: string;
  image: string;
  description: string;
  duration: string;
  departureMonths: string[];
  category: string;
  priceFrom: string;
}

export const tours: FreeAndEasyTour[] = [
  {
    id: 'maldives-freeandeasy',
    title: 'Escape to paradise',
    destination: 'Maldives',
    image: '/images/Maldives.jpeg',
    description:
      'Escape to paradise with our Maldives Free & Easy Tour! Enjoy pristine beaches, crystal-clear turquoise waters and stunning island scenery at your own pace. Relax, unwind and create your perfect tropical getaway with the freedom to explore, enjoy water activities or simply soak up the sun in one of the world’s most beautiful destinations.',
    duration: '4 Days / 3 Nights',
    departureMonths: ['January', 'February', 'March'],
    category: 'Leisure',
    priceFrom: 'Please contact for pricing',
  },
  {
    id: 'phuket-thailand-freeandeasy',
    title: 'Discover the tropical paradise',
    destination: 'Phuket, Thailand',
    image: '/images/Phuket_Thailand.jpeg',
    description:
      'Discover the tropical paradise of Phuket, where stunning beaches, turquoise waters and vibrant island life come together. Enjoy breathtaking scenery, exciting excursions, delicious Thai cuisine and unforgettable coastal experiences. Perfect for travellers looking for the ideal mix of relaxation, adventure and fun.',
    duration: '5 Days / 4 Nights',
    departureMonths: ['April', 'May', 'June'],
    category: 'Leisure',
    priceFrom: 'Please contact for pricing',
  },
  {
    id: 'langkawi-freeandeasy',
    title: 'Breathtaking beauty of Langkawi',
    destination: 'Langkawi',
    image: '/images/Langkawi.jpeg',
    description:
      'Discover the breathtaking beauty of Langkawi, Malaysia’s tropical island paradise. Enjoy pristine beaches, turquoise waters, stunning viewpoints, island adventures and rich natural scenery. From relaxing escapes to exciting experiences, Langkawi offers the perfect blend of nature, adventure and relaxation for an unforgettable holiday.',
    duration: '3 Days / 2 Nights',
    departureMonths: ['July', 'August', 'September'],
    category: 'Leisure',
    priceFrom: 'Please contact for pricing',
  },
  {
    id: 'chennai-shopping-freeandeasy',
    title: 'Chennai Shopping Tour',
    destination: 'Chennai, India',
    image: '/images/Chennai.jpeg',
    description:
      'Experience the best of Chennai on a 4-day shopping getaway, exploring popular shopping destinations for sarees, fashion, jewellery, accessories and traditional Indian products. Enjoy comfortable accommodation, delicious local cuisine and plenty of time to shop, explore and experience the vibrant city of Chennai.',
    duration: '4 Days / 3 Nights',
    departureMonths: ['October', 'November'],
    category: 'Shopping',
    priceFrom: 'Please contact for pricing',
  },
  {
    id: 'bangkok-shopping-freeandeasy',
    title: 'Bangkok Shopping Tour',
    destination: 'Bangkok, Thailand',
    image: '/images/Bangkok_Thailand.jpeg',
    description:
      'Discover Bangkok, a shopper’s paradise offering everything from trendy fashion and electronics to beauty products, souvenirs and local treasures. Enjoy a fun-filled shopping escape with vibrant markets, modern malls, delicious Thai cuisine and the exciting atmosphere of Thailand’s capital.',
    duration: '4 Days / 3 Nights',
    departureMonths: ['December', 'January'],
    category: 'Shopping',
    priceFrom: 'Please contact for pricing',
  },
  {
    id: 'kuala-lumpur-malaysia-freeandeasy',
    title: 'World-class shopping malls',
    destination: 'Kuala Lumpur, Malaysia',
    image: '/images/Kuala_Lumpur.jpeg',
    description:
      'Experience the vibrant city of Kuala Lumpur at your own pace. Enjoy a relaxing getaway with the freedom to explore iconic landmarks, world-class shopping malls, lively markets and delicious Malaysian cuisine. Perfect for travellers looking for a flexible city escape filled with shopping, sightseeing and leisure.',
    duration: '3 Days / 2 Nights',
    departureMonths: ['April', 'May'],
    category: 'Shopping',
    priceFrom: 'Please contact for pricing',
  },
  {
    id: 'dubai-freeandeasy',
    title: 'Glamour and excitement of Dubai',
    destination: 'Dubai',
    image: '/images/Dubai.jpeg',
    description:
      'Experience the glamour and excitement of Dubai on a flexible 4-day getaway. Discover iconic landmarks, world-class shopping, stunning architecture and vibrant entertainment at your own pace. Enjoy the freedom to create your own Dubai experience—perfect for shopping, sightseeing, dining and leisure.',
    duration: '4 Days / 3 Nights',
    departureMonths: ['February', 'March', 'April'],
    category: 'Leisure',
    priceFrom: 'Please contact for pricing',
  },
];

export const toTourSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
