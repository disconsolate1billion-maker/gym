export const products = [
  {
    id: 1,
    name: 'Compression Shirt',
    variant: 'Black',
    description: 'Compression shirt for wrestling training.',
    price: 55,
    images: ['https://placehold.co/400x400/1a1a1a/ffffff?text=Compression+Shirt'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shirts'
  },
  {
    id: 2,
    name: 'Compression Shirt',
    variant: 'Navy',
    description: 'Compression shirt for wrestling training.',
    price: 55,
    images: ['https://placehold.co/400x400/1e3a5f/ffffff?text=Compression+Shirt'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shirts'
  },
  {
    id: 3,
    name: 'Compression Shirt',
    variant: 'Grey',
    description: 'Compression shirt for wrestling training.',
    price: 55,
    images: ['https://placehold.co/400x400/4a4a4a/ffffff?text=Compression+Shirt'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shirts'
  },
  {
    id: 4,
    name: 'Training Shorts',
    variant: 'Black',
    description: 'Training shorts for wrestling and gym.',
    price: 45,
    images: ['https://placehold.co/400x400/1a1a1a/ffffff?text=Training+Shorts'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shorts'
  },
  {
    id: 5,
    name: 'Training Shorts',
    variant: 'Grey',
    description: 'Training shorts for wrestling and gym.',
    price: 45,
    images: ['https://placehold.co/400x400/4a4a4a/ffffff?text=Training+Shorts'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shorts'
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));

export default products;
