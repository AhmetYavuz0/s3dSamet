// src/data.js
export const products = [
  {
    id: 1,
    name: '3D KURBAĞA',
    category: 'Elektronik',
    price: 1500,
    images: [ // "image" yerine "images" kullan ve bir dizi yap
      'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      'https://i.imgur.com/7IUW1bi.jpeg',
      'https://cdn.vuetifyjs.com/images/cards/house.jpg',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.',
  },
  {
    id: 2,
    name: 'BASKI YAPIMI',
    category: 'Kadın',
    price: '219.90',
    images: [
      'https://i.imgur.com/7IUW1bi.jpeg',
    ],
    description: 'Şık ve sade, minimalist desenli tişört.',
    details: 'Hafif kumaş, nefes alabilen yapı, yaz için ideal.',
  },
  // ... diğer ürünleri de aynı şekilde güncelleyin
]
