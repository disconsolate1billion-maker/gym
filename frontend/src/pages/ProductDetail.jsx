import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[1] || 'M');
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="product-detail-page">
        <p>Product not found.</p>
        <Link to="/shop">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      variant: product.variant,
      price: product.price,
      size: selectedSize,
      image: product.images[0],
      quantity: 1
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-grid">
        <div className="product-detail-image">
          <img src={product.images[0]} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-detail-variant">{product.variant}</p>
          <p className="product-detail-price">${product.price}</p>

          <div className="size-selector">
            <label>Size</label>
            <div className="size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            data-testid="add-to-cart"
          >
            <ShoppingCart size={16} />
            {added ? 'Added!' : 'Add to Cart'}
          </button>

          <p className="product-detail-description">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
