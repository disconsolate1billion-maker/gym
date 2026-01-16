import React, { useState, useEffect } from 'react';
import { Star, Tag, Bell, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import WaitlistModal from '../components/WaitlistModal';

// Championship Sale Products Collection
const saleProducts = [
  {
    id: 'sale-001',
    name: 'Compression Shirt',
    category: 'Championship Sale',
    originalPrice: 75,
    salePrice: 45,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviews: 892,
    description: 'Battle-tested compression shirt built for intense mat sessions.',
    variant: 'Black / Red'
  },
  {
    id: 'sale-002',
    name: 'Compression Shirt',
    category: 'Championship Sale',
    originalPrice: 75,
    salePrice: 45,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviews: 654,
    description: 'Elite compression gear for champion wrestlers.',
    variant: 'Black / Gold'
  },
  {
    id: 'sale-003',
    name: 'Wrestling Shorts',
    category: 'Championship Sale',
    originalPrice: 85,
    salePrice: 49,
    discount: 42,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviews: 567,
    description: 'Competition-grade shorts with maximum grip resistance.',
    variant: 'Black / Red'
  },
  {
    id: 'sale-004',
    name: 'Wrestling Shorts',
    category: 'Championship Sale',
    originalPrice: 85,
    salePrice: 49,
    discount: 42,
    image: 'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?w=600&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.7,
    reviews: 234,
    description: 'Premium wrestling shorts designed for elite performance.',
    variant: 'Black / Gold'
  },
  {
    id: 'sale-005',
    name: 'APEX Training Set',
    category: 'Championship Sale',
    originalPrice: 160,
    salePrice: 79,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 5.0,
    reviews: 312,
    description: 'Complete training set: Compression Shirt + Wrestling Shorts bundle.',
    variant: 'Red / Black'
  }
];

const SalePage = () => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [waitlistModal, setWaitlistModal] = useState({ isOpen: false, product: null });
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  const handleAddToCart = (product) => {
    const selectedSize = selectedSizes[product.id] || product.sizes[0];
    addToCart({
      id: product.id,
      name: product.name,
      variant: product.variant,
      price: product.salePrice,
      originalPrice: product.originalPrice,
      size: selectedSize,
      image: product.image,
      quantity: 1
    });
  };

  const handleJoinWaitlist = (product) => {
    const selectedSize = selectedSizes[product.id] || product.sizes[0];
    setWaitlistModal({ 
      isOpen: true, 
      product: {
        ...product,
        price: product.salePrice,
        selectedSize
      }
    });
  };

  return (
    <div className="sale-page">
      <div className="sale-page-container">
        {/* Hero Banner */}
        <div className="sale-hero">
          <div className="sale-hero-content">
            <span className="sale-badge">
              <Tag size={16} />
              UP TO 50% OFF
            </span>
            <h1 className="sale-hero-title">Championship Sale</h1>
            <p className="sale-hero-subtitle">
              Train like a champion. Limited time pricing on elite compression gear.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="sale-products-section">
          <div className="sale-products-grid">
            {saleProducts.map((product) => (
              <div key={product.id} className="sale-product-card" data-testid={`sale-product-${product.id}`}>
                {/* Discount Badge */}
                <div className="sale-discount-badge">
                  -{product.discount}%
                </div>

                {/* Product Image */}
                <div className="sale-product-image-wrapper">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="sale-product-image"
                  />
                </div>

                {/* Product Info */}
                <div className="sale-product-info">
                  <h3 className="sale-product-name">{product.name}</h3>
                  <p className="sale-product-variant">{product.variant}</p>
                  
                  {/* Rating */}
                  <div className="sale-product-rating">
                    <Star size={14} fill="#D4AF37" color="#D4AF37" />
                    <span className="rating-value">{product.rating}</span>
                    <span className="rating-count">({product.reviews})</span>
                  </div>

                  {/* Pricing */}
                  <div className="sale-product-pricing">
                    <span className="sale-price">${product.salePrice}</span>
                    <span className="original-price">${product.originalPrice}</span>
                  </div>

                  {/* Size Selection */}
                  <div className="sale-size-selector">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`sale-size-btn ${selectedSizes[product.id] === size ? 'selected' : ''}`}
                        onClick={() => handleSizeSelect(product.id, size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                  {/* Add to Cart Button */}
                  <button 
                    className="sale-add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                    data-testid={`add-to-cart-${product.id}`}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>

                  {/* Notify Me Link */}
                  <button 
                    className="sale-notify-btn"
                    onClick={() => handleJoinWaitlist(product)}
                  >
                    <Bell size={14} />
                    Notify when back in stock
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <div className="sale-trust-section">
          <div className="sale-trust-item">
            <span className="trust-icon">🏆</span>
            <span>Championship Quality</span>
          </div>
          <div className="sale-trust-item">
            <span className="trust-icon">🚚</span>
            <span>Free Shipping Over $100</span>
          </div>
          <div className="sale-trust-item">
            <span className="trust-icon">↩️</span>
            <span>30-Day Returns</span>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={waitlistModal.isOpen}
        onClose={() => setWaitlistModal({ isOpen: false, product: null })}
        product={waitlistModal.product}
      />
    </div>
  );
};

export default SalePage;
