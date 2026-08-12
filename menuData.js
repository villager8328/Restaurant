/**
 * ============================================================
 *  MENU DATA
 * ============================================================
 *  Edit this file to change categories, dishes, descriptions,
 *  prices, images, and which items are "featured" on the home
 *  page. Each item needs a unique `id`.
 *
 *  To add a new category:
 *   1. Add it to the `categories` array below.
 *   2. Add items with `category` matching that id.
 * ============================================================
 */

export const categories = [
  { id: 'starters', label: 'Starters', icon: '🍢' },
  { id: 'main-course', label: 'Main Course', icon: '🍛' },
  { id: 'biryani', label: 'Biryani', icon: '🍚' },
  { id: 'pizza', label: 'Pizza', icon: '🍕' },
  { id: 'burgers', label: 'Burgers', icon: '🍔' },
  { id: 'beverages', label: 'Beverages', icon: '🥤' },
  { id: 'desserts', label: 'Desserts', icon: '🍮' },
]

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`

export const menuItems = [
  // ---------------- Starters ----------------
  {
    id: 'st-01',
    category: 'starters',
    name: 'Tandoori Chicken Tikka',
    description: 'Char-grilled chicken thigh marinated overnight in yoghurt, ginger and Kashmiri chilli.',
    price: 279,
    image: img('photo-1599487488170-d11ec9c172f0'),
    veg: false,
    featured: true,
  },
  {
    id: 'st-02',
    category: 'starters',
    name: 'Paneer Malai Seekh',
    description: 'Cottage cheese skewers with cream, cashew and green chilli, finished on live coals.',
    price: 249,
    image: img('photo-1631452180519-c014fe946bc7'),
    veg: true,
  },
  {
    id: 'st-03',
    category: 'starters',
    name: 'Crispy Corn Chaat',
    description: 'Wok-tossed sweet corn with bell peppers, tangy chaat masala and lime.',
    price: 189,
    image: img('photo-1541518763669-27fef04b14ea'),
    veg: true,
  },
  {
    id: 'st-04',
    category: 'starters',
    name: 'Amritsari Fish Fry',
    description: 'Basa fillets in a carom-seed batter, fried golden and served with mint chutney.',
    price: 299,
    image: img('photo-1544025162-d76694265947'),
    veg: false,
  },

  // ---------------- Main Course ----------------
  {
    id: 'mc-01',
    category: 'main-course',
    name: 'Butter Chicken',
    description: 'Slow-cooked tomato and butter gravy with tandoor-roasted chicken. Our most-ordered dish.',
    price: 349,
    image: img('photo-1603894584373-5ac82b2ae398'),
    veg: false,
    featured: true,
  },
  {
    id: 'mc-02',
    category: 'main-course',
    name: 'Paneer Butter Masala',
    description: 'Fresh paneer cubes simmered in a velvety cashew-tomato gravy.',
    price: 299,
    image: img('photo-1631452180519-c014fe946bc7'),
    veg: true,
  },
  {
    id: 'mc-03',
    category: 'main-course',
    name: 'Dal Makhani',
    description: 'Black lentils slow-simmered for 12 hours with cream and a hint of smoke.',
    price: 259,
    image: img('photo-1546833999-b9f581a1996d'),
    veg: true,
  },
  {
    id: 'mc-04',
    category: 'main-course',
    name: 'Rogan Josh',
    description: 'Kashmiri-style mutton curry, slow-braised with whole spices and fennel.',
    price: 389,
    image: img('photo-1631292784640-2b24be784d5d'),
    veg: false,
  },
  {
    id: 'mc-05',
    category: 'main-course',
    name: 'Butter Garlic Naan (2 pc)',
    description: 'Hand-stretched naan, brushed with garlic butter, straight from the tandoor.',
    price: 89,
    image: img('photo-1565557623262-b51c2513a641'),
    veg: true,
  },

  // ---------------- Biryani ----------------
  {
    id: 'bi-01',
    category: 'biryani',
    name: 'Hyderabadi Chicken Biryani',
    description: 'Long-grain basmati layered and dum-cooked with marinated chicken and saffron.',
    price: 319,
    image: img('photo-1589302168068-964664d93dc0'),
    veg: false,
    featured: true,
  },
  {
    id: 'bi-02',
    category: 'biryani',
    name: 'Mutton Biryani',
    description: 'Tender mutton pieces, slow dum-cooked with fried onions and mint.',
    price: 389,
    image: img('photo-1633945274309-2c2c07b5b9a3'),
    veg: false,
  },
  {
    id: 'bi-03',
    category: 'biryani',
    name: 'Veg Dum Biryani',
    description: 'Seasonal vegetables and paneer layered with fragrant basmati and whole spices.',
    price: 269,
    image: img('photo-1631292784640-2b24be784d5d'),
    veg: true,
  },
  {
    id: 'bi-04',
    category: 'biryani',
    name: 'Egg Biryani',
    description: 'Boiled eggs folded into aromatic dum-cooked rice with caramelised onions.',
    price: 239,
    image: img('photo-1589301760014-d929f3979dbc'),
    veg: false,
  },

  // ---------------- Pizza ----------------
  {
    id: 'pz-01',
    category: 'pizza',
    name: 'Tandoori Paneer Pizza',
    description: 'Wood-fired base topped with tandoori paneer, onion, capsicum and mint drizzle.',
    price: 329,
    image: img('photo-1513104890138-7c749659a591'),
    veg: true,
    featured: true,
  },
  {
    id: 'pz-02',
    category: 'pizza',
    name: 'Classic Margherita',
    description: 'San Marzano tomato, fresh mozzarella and basil on a thin, blistered crust.',
    price: 269,
    image: img('photo-1567188040759-fb8a883dc6d8'),
    veg: true,
  },
  {
    id: 'pz-03',
    category: 'pizza',
    name: 'Chicken Tikka Pizza',
    description: 'Smoky chicken tikka, onions and a spiced tomato base with mozzarella.',
    price: 359,
    image: img('photo-1594007654729-407eedc4be65'),
    veg: false,
  },
  {
    id: 'pz-04',
    category: 'pizza',
    name: 'Peri Peri Veggie Pizza',
    description: 'Loaded with bell peppers, olives, corn and a fiery peri-peri drizzle.',
    price: 309,
    image: img('photo-1571407970349-bc81e7e96d47'),
    veg: true,
  },

  // ---------------- Burgers ----------------
  {
    id: 'bu-01',
    category: 'burgers',
    name: 'Smoky BBQ Chicken Burger',
    description: 'Grilled chicken thigh, smoked cheddar and BBQ sauce in a toasted brioche bun.',
    price: 219,
    image: img('photo-1568901346375-23c9450c58cd'),
    veg: false,
    featured: true,
  },
  {
    id: 'bu-02',
    category: 'burgers',
    name: 'Crispy Paneer Burger',
    description: 'Golden-fried paneer patty, spiced mayo, lettuce and pickled onion.',
    price: 189,
    image: img('photo-1550547660-d9450f859349'),
    veg: true,
  },
  {
    id: 'bu-03',
    category: 'burgers',
    name: 'Double Cheese Mutton Burger',
    description: 'Two juicy mutton patties, double cheddar and a smoky burger sauce.',
    price: 259,
    image: img('photo-1571091718767-18b5b1457add'),
    veg: false,
  },

  // ---------------- Beverages ----------------
  {
    id: 'bv-01',
    category: 'beverages',
    name: 'Masala Chaas',
    description: 'Spiced buttermilk with roasted cumin, mint and curry leaf tempering.',
    price: 79,
    image: img('photo-1544145945-f90425340c7e'),
    veg: true,
  },
  {
    id: 'bv-02',
    category: 'beverages',
    name: 'Fresh Watermelon Juice',
    description: 'Cold-pressed watermelon, served over ice with a squeeze of lime.',
    price: 99,
    image: img('photo-1544148103-0773bf10d330'),
    veg: true,
  },
  {
    id: 'bv-03',
    category: 'beverages',
    name: 'Virgin Mojito',
    description: 'Mint, lime and soda over crushed ice — cool and refreshing.',
    price: 129,
    image: img('photo-1551538827-9c037cb4f32a'),
    veg: true,
  },
  {
    id: 'bv-04',
    category: 'beverages',
    name: 'Masala Chai',
    description: 'Hand-brewed tea simmered with ginger, cardamom and cloves.',
    price: 59,
    image: img('photo-1571934811356-5cc061b6821f'),
    veg: true,
  },

  // ---------------- Desserts ----------------
  {
    id: 'ds-01',
    category: 'desserts',
    name: 'Gulab Jamun (2 pc)',
    description: 'Warm milk dumplings soaked in rose and cardamom syrup.',
    price: 99,
    image: img('photo-1571877227200-a0d98ea607e9'),
    veg: true,
    featured: true,
  },
  {
    id: 'ds-02',
    category: 'desserts',
    name: 'Belgian Chocolate Brownie',
    description: 'Fudgy brownie served warm with a scoop of vanilla bean ice cream.',
    price: 159,
    image: img('photo-1606313564200-e75d5e30476c'),
    veg: true,
  },
  {
    id: 'ds-03',
    category: 'desserts',
    name: 'Rasmalai',
    description: 'Soft paneer discs soaked in saffron-cardamom milk, chilled and topped with pistachio.',
    price: 129,
    image: img('photo-1606491956689-2ea866880c84'),
    veg: true,
  },
]

/** Convenience: items flagged as `featured: true`, for the home page. */
export const featuredItems = menuItems.filter((item) => item.featured)
