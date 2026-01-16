export const products = [
  {
    id: 1,
    name: 'Compression Shirt',
    variant: 'Black',
    description: 'Compression shirt for wrestling training.',
    price: 55,
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80'],
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
    images: ['https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80'],
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
    images: ['https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80'],
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
    images: ['https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80'],
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
    images: ['https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600&q=80'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    category: 'shorts'
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));

export default products;
