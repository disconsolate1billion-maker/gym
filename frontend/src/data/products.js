export const products = [
  {
    id: 1,
    name: 'Compression Shirt',
    variant: 'Black / Red',
    description: 'Compression shirt for wrestling training.',
    price: 55,
    images: ['https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shirts'
  },
  {
    id: 2,
    name: 'Compression Shirt',
    variant: 'Black / Gold',
    description: 'Compression shirt for wrestling training.',
    price: 55,
    images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shirts'
  },
  {
    id: 3,
    name: 'Compression Shirt',
    variant: 'Red / Black',
    description: 'Compression shirt for wrestling training.',
    price: 55,
    images: ['https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shirts'
  },
  {
    id: 4,
    name: 'Wrestling Shorts',
    variant: 'Black / Red',
    description: 'Wrestling shorts for training and competition.',
    price: 65,
    images: ['https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shorts'
  },
  {
    id: 5,
    name: 'Wrestling Shorts',
    variant: 'Black / Gold',
    description: 'Wrestling shorts for training and competition.',
    price: 65,
    images: ['https://images.unsplash.com/photo-1562771379-eafdca7a02f8?w=600&q=80'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shorts'
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));

export default products;
