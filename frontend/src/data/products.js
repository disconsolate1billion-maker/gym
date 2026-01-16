// APEX Products - Wrestling & Combat Training Gear

export const products = [
  // Compression Shirts
  {
    id: 1,
    name: 'Compression Shirt',
    category: 'compression',
    type: 'shirt',
    variant: 'Black / Red',
    description: 'Elite compression gear engineered for wrestlers and combat athletes. Built to endure grueling practices and dominate on the mat.',
    price: 55,
    originalPrice: 75,
    color: 'Black',
    logo: 'Red',
    images: [
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    stock: { XS: 5, S: 12, M: 18, L: 25, XL: 15 },
    featured: true,
    mostPopular: true,
    soldCount: 892
  },
  {
    id: 2,
    name: 'Compression Shirt',
    category: 'compression',
    type: 'shirt',
    variant: 'Black / Gold',
    description: 'Elite compression gear engineered for wrestlers and combat athletes. Built to endure grueling practices and dominate on the mat.',
    price: 55,
    originalPrice: 75,
    color: 'Black',
    logo: 'Gold',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    stock: { XS: 8, S: 10, M: 12, L: 18, XL: 12 },
    featured: true,
    soldCount: 654
  },
  {
    id: 3,
    name: 'Compression Shirt',
    category: 'compression',
    type: 'shirt',
    variant: 'Red / Black',
    description: 'Elite compression gear engineered for wrestlers and combat athletes. Built to endure grueling practices and dominate on the mat.',
    price: 55,
    originalPrice: 75,
    color: 'Red',
    logo: 'Black',
    images: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    stock: { XS: 10, S: 12, M: 15, L: 20, XL: 14 },
    featured: true,
    soldCount: 445
  },
  {
    id: 4,
    name: 'Compression Shirt',
    category: 'compression',
    type: 'shirt',
    variant: 'White / Red',
    description: 'Elite compression gear engineered for wrestlers and combat athletes. Built to endure grueling practices and dominate on the mat.',
    price: 55,
    originalPrice: 75,
    color: 'White',
    logo: 'Red',
    images: [
      'https://images.unsplash.com/photo-1618886614638-80e3c103d2dc?w=600&q=80',
      'https://images.unsplash.com/photo-1618886614638-80e3c103d2dc?w=600&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    stock: { XS: 6, S: 14, M: 18, L: 22, XL: 16 },
    featured: true,
    soldCount: 312
  },
  // Wrestling Shorts
  {
    id: 5,
    name: 'Wrestling Shorts',
    category: 'shorts',
    type: 'shorts',
    variant: 'Black / Red',
    description: 'Competition-grade wrestling shorts designed for maximum mobility and grip resistance. Stay locked in during every scramble.',
    price: 65,
    originalPrice: 85,
    color: 'Black',
    logo: 'Red',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80'
    ],
    mensSizes: ['S', 'M', 'L', 'XL'],
    womensSizes: ['XS', 'S', 'M', 'L'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    stock: { XS: 6, S: 10, M: 14, L: 18, XL: 12 },
    featured: true,
    mostPopular: true,
    soldCount: 567
  },
  {
    id: 6,
    name: 'Wrestling Shorts',
    category: 'shorts',
    type: 'shorts',
    variant: 'Black / Gold',
    description: 'Competition-grade wrestling shorts designed for maximum mobility and grip resistance. Stay locked in during every scramble.',
    price: 65,
    originalPrice: 85,
    color: 'Black',
    logo: 'Gold',
    images: [
      'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?w=600&q=80',
      'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?w=600&q=80'
    ],
    mensSizes: ['S', 'M', 'L', 'XL'],
    womensSizes: ['XS', 'S', 'M', 'L'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    stock: { XS: 4, S: 8, M: 10, L: 14, XL: 10 },
    featured: true,
    soldCount: 234
  }
];


export const getProductById = (id) => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};

export const checkStock = (productId, size) => {
  const product = getProductById(productId);
  if (!product || !product.stock) return 0;
  return product.stock[size] || 0;
};

export default products;
