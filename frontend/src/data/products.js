export const products = [
  {
    id: 1,
    name: 'Compression Shirt',
    variant: 'Black',
    description: 'Moisture-wicking compression shirt for training.',
    price: 45,
    images: ['https://images.pexels.com/photos/6311652/pexels-photo-6311652.jpeg?auto=compress&cs=tinysrgb&w=600'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shirts'
  },
  {
    id: 2,
    name: 'Compression Shirt',
    variant: 'White',
    description: 'Moisture-wicking compression shirt for training.',
    price: 45,
    images: ['https://images.pexels.com/photos/6311653/pexels-photo-6311653.jpeg?auto=compress&cs=tinysrgb&w=600'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shirts'
  },
  {
    id: 3,
    name: 'Compression Shirt',
    variant: 'Navy',
    description: 'Moisture-wicking compression shirt for training.',
    price: 45,
    images: ['https://images.pexels.com/photos/6311639/pexels-photo-6311639.jpeg?auto=compress&cs=tinysrgb&w=600'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shirts'
  },
  {
    id: 4,
    name: 'Training Shorts',
    variant: 'Black',
    description: 'Lightweight training shorts with stretch fabric.',
    price: 40,
    images: ['https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shorts'
  },
  {
    id: 5,
    name: 'Training Shorts',
    variant: 'Grey',
    description: 'Lightweight training shorts with stretch fabric.',
    price: 40,
    images: ['https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shorts'
  },
  {
    id: 6,
    name: 'Training Shorts',
    variant: 'Navy',
    description: 'Lightweight training shorts with stretch fabric.',
    price: 40,
    images: ['https://images.unsplash.com/photo-1483721310020-03333e577078?w=600&q=80'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shorts'
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));

export default products;
