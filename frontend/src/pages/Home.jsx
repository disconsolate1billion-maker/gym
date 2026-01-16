import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ShoppingCart, Truck, RotateCcw, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      variant: product.variant,
      price: product.price,
      size: 'M',
      image: product.images[0],
      quantity: 1
    });
  };

  const shirts = products.filter(p => p.category === 'shirts');
  const shorts = products.filter(p => p.category === 'shorts');

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-content">
          <h1>Athletic Training Gear</h1>
          <p>Quality compression wear for wrestlers and athletes</p>
          <Link to="/shop" className="btn-primary">Shop All Products</Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="trust-item">
          <Truck size={20} />
          <span>Free Shipping $75+</span>
        </div>
        <div className="trust-item">
          <RotateCcw size={20} />
          <span>30-Day Returns</span>
        </div>
        <div className="trust-item">
          <Shield size={20} />
          <span>Secure Checkout</span>
        </div>
      </section>

      {/* Compression Shirts */}
      <section className="product-section">
        <div className="container">
          <div className="section-header">
            <h2>Compression Shirts</h2>
            <Link to="/shop" className="view-all">View All →</Link>
          </div>
          
          <div className="products-grid">
            {shirts.map((product) => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`} className="product-image-link">
                  <div className="product-image">
                    <img src={product.images[0]} alt={product.name} loading="lazy" />
                  </div>
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="product-name">{product.name}</h3>
                  </Link>
                  <p className="product-variant">{product.variant}</p>
                  <div className="product-footer">
                    <span className="product-price">${product.price}</span>
                    <button 
                      className="quick-add-btn"
                      onClick={() => handleAddToCart(product)}
                      title="Add to Cart"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Shorts */}
      <section className="product-section alt-bg">
        <div className="container">
          <div className="section-header">
            <h2>Training Shorts</h2>
            <Link to="/shop" className="view-all">View All →</Link>
          </div>
          
          <div className="products-grid">
            {shorts.map((product) => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`} className="product-image-link">
                  <div className="product-image">
                    <img src={product.images[0]} alt={product.name} loading="lazy" />
                  </div>
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="product-name">{product.name}</h3>
                  </Link>
                  <p className="product-variant">{product.variant}</p>
                  <div className="product-footer">
                    <span className="product-price">${product.price}</span>
                    <button 
                      className="quick-add-btn"
                      onClick={() => handleAddToCart(product)}
                      title="Add to Cart"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="cta-section">
        <h2>New to APEX?</h2>
        <p>Quality training gear at fair prices. No gimmicks.</p>
        <Link to="/about" className="btn-secondary">Learn More</Link>
      </section>
    </div>
  );
};

export default Home;
