import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>APEX</h4>
          <p>Wrestling compression gear</p>
        </div>

        <div className="footer-section">
          <h4>Shop</h4>
          <Link to="/shop">All Products</Link>
          <Link to="/size-guide">Size Guide</Link>
        </div>

        <div className="footer-section">
          <h4>Help</h4>
          <Link to="/shipping-returns">Shipping & Returns</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} APEX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
