import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Shop = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      variant: product.variant,
      price: product.price,
      size: product.sizes[Math.floor(product.sizes.length / 2)],
      image: product.images[0],
      quantity: 1
    });
  };

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1 className="shop-title">Shop</h1>
        <p className="shop-count">{products.length} products</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" data-testid={`product-${product.id}`}>
            <Link to={`/product/${product.id}`}>
              <div className="product-image">
                <img src={product.images[0]} alt={product.name} />
              </div>
            </Link>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-variant">{product.variant}</p>
              <p className="product-price">${product.price}</p>
              <button 
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
                data-testid={`add-to-cart-${product.id}`}
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
