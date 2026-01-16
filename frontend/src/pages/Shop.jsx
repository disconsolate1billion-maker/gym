import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Filter, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

// All Products Data - APEX Wrestling Collection
const allProducts = [
  // Compression Shirts
  {
    id: 'prod-001',
    name: 'Compression Shirt',
    category: 'Compression',
    price: 55.00,
    originalPrice: 75.00,
    salePrice: null,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    variant: 'Black / Red',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviews: 892,
    inStock: true,
    mostPopular: true
  },
  {
    id: 'prod-002',
    name: 'Compression Shirt',
    category: 'Compression',
    price: 55.00,
    originalPrice: 75.00,
    salePrice: null,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
    variant: 'Black / Gold',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviews: 654,
    inStock: true
  },
  {
    id: 'prod-003',
    name: 'Compression Shirt',
    category: 'Compression',
    price: 55.00,
    originalPrice: 75.00,
    salePrice: null,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80',
    variant: 'Red / Black',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviews: 445,
    inStock: true
  },
  {
    id: 'prod-004',
    name: 'Compression Shirt',
    category: 'Compression',
    price: 55.00,
    originalPrice: 75.00,
    salePrice: null,
    image: 'https://images.unsplash.com/photo-1618886614638-80e3c103d2dc?w=600&q=80',
    variant: 'White / Red',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.7,
    reviews: 312,
    inStock: true
  },
  // Wrestling Shorts
  {
    id: 'prod-005',
    name: 'Wrestling Shorts',
    category: 'Shorts',
    price: 65.00,
    originalPrice: 85.00,
    salePrice: null,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80',
    variant: 'Black / Red',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviews: 567,
    inStock: true,
    mostPopular: true
  },
  {
    id: 'prod-006',
    name: 'Wrestling Shorts',
    category: 'Shorts',
    price: 65.00,
    originalPrice: 85.00,
    salePrice: null,
    image: 'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?w=600&q=80',
    variant: 'Black / Gold',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviews: 234,
    inStock: true
  },
  // Bundles
  {
    id: 'bundle-001',
    name: 'APEX Training Set',
    category: 'Bundles',
    price: 89.00,
    originalPrice: 120.00,
    salePrice: null,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    variant: 'Black / Red',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 5.0,
    reviews: 312,
    inStock: true,
    isBundle: true
  }
];

const categories = ['All', 'Compression', 'Shorts', 'Bundles'];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
  { value: 'rating', label: 'Top Rated' }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory === 'All') return true;
    return product.category === selectedCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return (a.salePrice || a.price) - (b.salePrice || b.price);
      case 'price-high':
        return (b.salePrice || b.price) - (a.salePrice || a.price);
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id.localeCompare(a.id);
      default:
        return 0;
    }
  });

  const handleQuickAdd = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      variant: product.variant,
      price: product.salePrice || product.price,
      originalPrice: product.originalPrice,
      size: product.sizes[Math.floor(product.sizes.length / 2)],
      image: product.image,
      quantity: 1
    });
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        variant: product.variant,
        price: product.salePrice || product.price,
        originalPrice: product.originalPrice,
        image: product.image
      });
    }
  };

  return (
    <div className="shop-page">
      <div className="shop-container">
        {/* Header */}
        <div className="shop-header">
          <h1 className="shop-title">SHOP ALL</h1>
          <p className="shop-count">{sortedProducts.length} Products</p>
        </div>

        {/* Filters and Sort */}
        <div className="shop-controls">
          {/* Category Filter */}
          <div className="shop-filter-container">
            <button 
              className="shop-filter-btn"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={18} />
              Filter by Category
              <ChevronDown size={16} className={isFilterOpen ? 'rotate-180' : ''} />
            </button>
            
            {isFilterOpen && (
              <div className="shop-filter-dropdown">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`filter-option ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort */}
          <div className="shop-sort">
            <span className="sort-label">Sort by:</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="shop-products-grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="shop-product-card" data-testid={`product-${product.id}`}>
              {/* Wishlist Button */}
              <button 
                className={`shop-wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label="Add to wishlist"
              >
                <Heart size={20} fill={isInWishlist(product.id) ? '#DC2626' : 'none'} />
              </button>

              {/* Product Image */}
              <Link to={`/product/${product.id}`} className="shop-product-image-link">
                <div className="shop-product-image-wrapper">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="shop-product-image"
                  />
                  {product.mostPopular && (
                    <span className="shop-badge popular">Most Popular</span>
                  )}
                  {product.salePrice && (
                    <span className="shop-badge sale">
                      -{Math.round((1 - product.salePrice / product.price) * 100)}%
                    </span>
                  )}
                </div>
              </Link>

              {/* Product Info */}
              <div className="shop-product-info">
                <span className="shop-product-category">{product.category}</span>
                <Link to={`/product/${product.id}`}>
                  <h3 className="shop-product-name">{product.name}</h3>
                </Link>
                <p className="shop-product-variant">{product.variant}</p>
                
                {/* Rating */}
                <div className="shop-product-rating">
                  <Star size={14} fill="#D4AF37" color="#D4AF37" />
                  <Star size={14} fill="#D4AF37" color="#D4AF37" />
                  <Star size={14} fill="#D4AF37" color="#D4AF37" />
                  <Star size={14} fill="#D4AF37" color="#D4AF37" />
                  <Star size={14} fill={product.rating >= 4.8 ? "#D4AF37" : "none"} color="#D4AF37" />
                  <span className="rating-count">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="shop-product-price">
                  {product.salePrice ? (
                    <>
                      <span className="current-price">${product.salePrice.toFixed(2)}</span>
                      <span className="original-price">${product.price.toFixed(2)}</span>
                    </>
                  ) : (
                    <span className="current-price">${product.price.toFixed(2)}</span>
                  )}
                </div>

                {/* Quick Add Button */}
                <button 
                  className="shop-quick-add-btn"
                  onClick={() => handleQuickAdd(product)}
                  data-testid={`quick-add-${product.id}`}
                >
                  <ShoppingCart size={16} />
                  Quick Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
