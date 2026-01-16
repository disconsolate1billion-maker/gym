import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <h1>Wishlist</h1>
        <div className="wishlist-empty">
          <p>Your wishlist is empty</p>
          <Link to="/shop">Browse Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <h1>Wishlist</h1>
      <div className="products-grid">
        {wishlist.map((item) => (
          <div key={item.id} className="product-card">
            <Link to={`/product/${item.id}`}>
              <div className="product-image">
                <img src={item.image} alt={item.name} />
              </div>
            </Link>
            <div className="product-info">
              <h3 className="product-name">{item.name}</h3>
              <p className="product-variant">{item.variant}</p>
              <p className="product-price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
