// Prices are null — boss fills these in during handoff meeting.
// isVeg follows FSSAI standard: true = green dot, false = red dot.

export const MENU_CATEGORIES = [
  'All',
  'Starters',
  'Main Course',
  'Sizzlers',
  'Noodles & Rice',
  'Beverages',
  'Desserts',
]

export const MENU_ITEMS = [
  // ── STARTERS ──
  {
    id: 1, name: 'Crispy Corn',
    category: 'Starters',
    description: 'Golden crispy corn tossed with herbs and spices',
    price: null, isVeg: true, image: null,
  },
  {
    id: 2, name: 'Chicken Tikka',
    category: 'Starters',
    description: 'Tender chicken marinated in classic tandoori spices',
    price: null, isVeg: false, image: null,
  },
  {
    id: 3, name: 'Fish Tikka Masala',
    category: 'Starters',
    description: 'Fresh fish in aromatic masala marinade, grilled to order',
    price: null, isVeg: false, image: null,
  },
  {
    id: 4, name: 'Chilli Paneer',
    category: 'Starters',
    description: 'Crispy paneer cubes tossed in spicy Indo-Chinese sauce',
    price: null, isVeg: true, image: null,
  },
  // ── MAIN COURSE ──
  {
    id: 5, name: 'Butter Chicken',
    category: 'Main Course',
    description: 'Slow-cooked chicken in rich tomato-cream gravy',
    price: null, isVeg: false, image: null,
  },
  {
    id: 6, name: 'Naan',
    category: 'Main Course',
    description: 'Freshly baked soft naan from the tandoor',
    price: null, isVeg: true, image: null,
  },
  {
    id: 7, name: 'Lachha Paratha',
    category: 'Main Course',
    description: 'Multi-layered flaky flatbread, served with butter',
    price: null, isVeg: true, image: null,
  },
  // ── SIZZLERS ──
  {
    id: 8, name: 'Western Sizzler',
    category: 'Sizzlers',
    description: 'Grilled chicken and vegetables on a smoking iron plate',
    price: null, isVeg: false, image: null,
  },
  // ── NOODLES & RICE ──
  {
    id: 9, name: 'Hakka Noodles',
    category: 'Noodles & Rice',
    description: 'Wok-tossed noodles with vegetables and soy sauce',
    price: null, isVeg: true, image: null,
  },
  // ── BEVERAGES ──
  {
    id: 10, name: 'Virgin Mojito',
    category: 'Beverages',
    description: 'Fresh mint, lime wedge, and sparkling soda — chilled',
    price: null, isVeg: true, image: null,
  },
  {
    id: 11, name: 'Blue Lagoon',
    category: 'Beverages',
    description: 'Blue curacao syrup, lemon juice, and sparkling water',
    price: null, isVeg: true, image: null,
  },
  // ── DESSERTS ──
  {
    id: 12, name: 'Sizzling Brownie',
    category: 'Desserts',
    description: 'Warm chocolate brownie with vanilla ice cream on a sizzler plate',
    price: null, isVeg: true, image: null,
  },
]
