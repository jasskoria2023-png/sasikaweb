export interface TourPackage {
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

export const tours: TourPackage[] = [
  {
    id: 'Azerbaijan and Georgia',
    title: 'Journey through the breathtaking landscapes',
    destination: 'Azerbaijan & Georgia',
    image: '/images/azerbaijan.jpeg',
    description:
      'Embark on an unforgettable 11-day journey through the breathtaking landscapes, rich history and vibrant cultures of Azerbaijan and Georgia. Discover the modern charm of Baku, explore spectacular mountain scenery, experience ancient cities and charming villages, and enjoy the unique flavours and traditions of the Caucasus. From iconic landmarks and scenic countryside to memorable cultural experiences, this carefully designed group tour offers the perfect combination of sightseeing, comfort and adventure',
    duration: '11 Days / 10 Nights',
    departureMonths: ['December', 'February', 'April'],
    category: 'Leisure',
    priceFrom: 'Please contact for ',
  },
  {
    id: 'Philippines',
    title: 'Breathtaking beauty of the Philippines ',
    destination: 'Philippines',
    image: '/images/Phillipinnes.jpeg',
    description:
      'Experience the breathtaking beauty of the Philippines on our unforgettable 9-day group tour! Discover pristine white-sand beaches, crystal-clear turquoise waters, spectacular islands and vibrant cities while enjoying the warm hospitality and unique culture of this tropical paradise. From exciting island adventures and scenic landscapes to relaxing beach experiences, this carefully designed journey offers the perfect combination of adventure, relaxation and unforgettable memories.',
    duration: '9 Days / 8 Nights',
    departureMonths: ['January', 'December'],
    category: 'Leisure',
    priceFrom: 'Please contact for ',
  },
  {
    id: 'Vietnam',
    title: 'Beauty, history and culture ',
    destination: 'Vietnam',
    image: '/images/Vietnam.jpeg',
    description:
      'Embark on an unforgettable 12-day journey through the captivating beauty, history and culture of Vietnam. From vibrant cities and ancient heritage sites to breathtaking mountain landscapes, scenic coastlines and spectacular natural wonders, this carefully crafted group tour offers an incredible variety of experiences. Discover the authentic flavours of Vietnamese cuisine, explore iconic attractions and create lifelong memories while travelling with a fun and friendly group.',
    duration: '12 Days / 11 Nights',
    departureMonths: ['February', 'November'],
    category: 'Leisure',
    priceFrom: 'Please contact for ',
  },
  {
    id: 'China',
    title: 'wonders of China',
    destination: 'China',
    image: '/images/China.jpeg',
    description:
      'Discover the wonders of China on an unforgettable 9-day group tour! Explore a fascinating blend of ancient history, vibrant culture and modern innovation while visiting iconic landmarks, breathtaking landscapes and world-famous cities. From magnificent historical sites to exciting cultural experiences, this carefully designed journey promises unforgettable memories and an incredible taste of China.',
    duration: '9 Days / 8 Nights',
    departureMonths: ['March', 'September'],
    category: 'Leisure',
    priceFrom: 'Please contact for ',
  },
  {
    id: 'Turkey',
    title: 'Magic of Turkey',
    destination: 'Turkey',
    image: '/images/Turkey.jpeg',
    description:
      'Discover the magic of Turkey on an unforgettable 8-day group tour! Explore Istanbul’s iconic landmarks, experience the beauty of the Bosphorus, discover ancient history, breathtaking landscapes and vibrant Turkish culture. From fascinating historical sites and colourful bazaars to delicious cuisine and unforgettable scenic experiences, this journey offers the perfect blend of history, culture, adventure and relaxation.',
    duration: '8 Days / 7 Nights',
    departureMonths: ['March', 'October'],
    category: 'Leisure',
    priceFrom: 'Please contact for ',
  },
  {
    id: 'South-Korea',
    title: 'Beauty of South Korea ',
    destination: 'South Korea',
    image: '/images/SouthKorea.jpeg',
    description:
      'Discover the captivating beauty of South Korea on an unforgettable 10-day group tour! Explore vibrant Seoul, ancient palaces, scenic mountains, charming traditional villages and modern city life. Experience Korea’s unique culture, delicious cuisine and breathtaking landscapes while creating unforgettable memories with your group.',
    duration: '10 Days / 9 Nights',
    departureMonths: ['April', 'October'],
    category: 'Leisure',
    priceFrom: 'Please contact for ',
  },
  {
    id: 'Japan',
    title: 'Timeless beauty of Japan',
    destination: 'Japan',
    image: '/images/Japan.jpeg',
    description:
      'Experience the timeless beauty of Japan on an unforgettable 10-day group tour! Discover vibrant cities, ancient temples, stunning natural landscapes and unique Japanese traditions. From the excitement of Tokyo to cultural treasures and scenic destinations, enjoy the perfect blend of tradition, technology, culture and unforgettable experiences.',
    duration: '10 Days / 9 Nights',
    departureMonths: ['April', 'October'],
    category: 'Leisure',
    priceFrom: 'Please contact for ',
  },
  {
    id: 'Morocco',
    title: 'Enchanting Beauty of Morocco',
    destination: 'Morocco',
    image: '/images/Morocco.jpeg',
    description:
      'Discover the enchanting beauty of Morocco on an unforgettable 9-day group tour! Explore vibrant souks, ancient medinas, magnificent palaces and breathtaking landscapes, from the Atlas Mountains to the golden Sahara Desert. Experience Morocco’s rich culture, fascinating history, traditional cuisine and warm hospitality on a journey filled with unforgettable moments.',
    duration: '9 Days / 8 Nights',
    departureMonths: ['May', 'December'],
    category: 'Leisure',
    priceFrom: 'Please contact for ',
  },
];

export const toTourSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
