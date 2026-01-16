import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Home = () => {
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
    <div className="home-page">
      {/* Simple Hero */}
      <section className="hero-simple">
        <h1>APEX Wrestling</h1>
        <p>Compression gear for wrestlers</p>
        <Link to="/shop" className="btn-primary">Shop Now</Link>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          
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
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple About */}
      <section className="about-simple">
        <div className="container">
          <h2>About Us</h2>
          <p>We sell compression shirts and shorts for wrestling and combat sports training.</p>
          <Link to="/about">Learn More</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
