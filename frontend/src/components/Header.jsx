import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Heart, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const { getCartCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();
  const cartCount = getCartCount();
  const aboutDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="header-logo">
            <h1 className="logo-text">APEX</h1>
            <span className="logo-tagline">Forged in the Fire</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
            
            {/* About Us Dropdown - Desktop (hover) */}
            <div 
              className="nav-dropdown-container"
              ref={aboutDropdownRef}
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button 
                className="nav-link nav-dropdown-trigger"
                data-testid="about-us-dropdown"
              >
                About Us
                <ChevronDown 
                  size={16} 
                  className={`dropdown-chevron ${isAboutDropdownOpen ? 'rotated' : ''}`} 
                />
              </button>
              
              {isAboutDropdownOpen && (
                <div className="nav-dropdown-menu" data-testid="about-dropdown-menu">
                  <Link 
                    to="/about" 
                    className="nav-dropdown-item"
                    onClick={() => setIsAboutDropdownOpen(false)}
                  >
                    About APEX
                  </Link>
                  <Link 
                    to="/from-our-customers" 
                    className="nav-dropdown-item"
                    onClick={() => setIsAboutDropdownOpen(false)}
                    data-testid="from-our-customers-link"
                  >
                    Athlete Reviews
                  </Link>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('newsletter')} className="nav-link">
              {t('nav.earlyAccess')}
            </button>

            {/* Championship Sale Link */}
            <Link to="/1111-sale" className="nav-link nav-sale-link">
              Championship Sale
            </Link>
          </nav>

          {/* Cart and User Actions */}
          <div className="header-actions">
            {/* Language Selector */}
            <LanguageSelector />

            {/* Wishlist Icon */}
            <Link to="/wishlist" className="wishlist-icon-btn">
              <Heart size={22} strokeWidth={2} />
              {wishlistCount > 0 && (
                <span className="wishlist-badge">{wishlistCount}</span>
              )}
            </Link>

            {/* Cart Icon */}
            <Link to="/cart" className="cart-icon-btn">
              <ShoppingCart size={22} strokeWidth={2} />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </Link>

            {/* User Menu */}
            <div className="user-menu-container">
              <button 
                className="user-icon-btn"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <User size={22} strokeWidth={2} />
              </button>

              {isUserMenuOpen && (
                <div className="user-dropdown">
                  {isAuthenticated ? (
                    <>
                      <Link to="/account" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                        {t('nav.account')}
                      </Link>
                      <Link to="/account/orders" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                        {t('nav.orders')}
                      </Link>
                      <Link to="/account/credit" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                        APEX Credit
                      </Link>
                      {user?.is_admin && (
                        <Link to="/admin" className="dropdown-item admin-link" onClick={() => setIsUserMenuOpen(false)}>
                          Admin Dashboard
                        </Link>
                      )}
                      <button className="dropdown-item" onClick={handleLogout}>
                        {t('nav.logOut')}
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                        {t('nav.logIn')}
                      </Link>
                      <Link to="/register" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                        {t('nav.signUp')}
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            <Link to="/shop" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            
            {/* Mobile About Us Dropdown */}
            <div className="mobile-dropdown">
              <button 
                className="nav-link mobile-dropdown-trigger"
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
              >
                About Us
                <ChevronDown 
                  size={16} 
                  className={`dropdown-chevron ${isMobileAboutOpen ? 'rotated' : ''}`} 
                />
              </button>
              
              {isMobileAboutOpen && (
                <div className="mobile-dropdown-menu">
                  <Link 
                    to="/about" 
                    className="mobile-dropdown-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About APEX
                  </Link>
                  <Link 
                    to="/from-our-customers" 
                    className="mobile-dropdown-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Athlete Reviews
                  </Link>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('newsletter')} className="nav-link">
              {t('nav.earlyAccess')}
            </button>

            {/* Championship Sale Link - Mobile */}
            <Link to="/1111-sale" className="nav-link nav-sale-link" onClick={() => setIsMenuOpen(false)}>
              Championship Sale
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/account" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.account')}
                </Link>
                <button className="nav-link" onClick={handleLogout}>
                  {t('nav.logOut')}
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.logIn')}
                </Link>
                <Link to="/register" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.signUp')}
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
