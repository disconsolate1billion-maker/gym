import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const cartCount = getCartCount();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          APEX
        </Link>

        <nav className="nav-desktop">
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="header-actions">
          <Link to="/cart" className="cart-btn">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          
          {isAuthenticated ? (
            <button onClick={logout} className="auth-btn">Logout</button>
          ) : (
            <Link to="/login" className="auth-btn">
              <User size={20} />
            </Link>
          )}

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="nav-mobile">
          <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          {isAuthenticated ? (
            <button onClick={() => { logout(); setIsMenuOpen(false); }}>Logout</button>
          ) : (
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
