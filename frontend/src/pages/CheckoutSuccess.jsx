import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="track-page">
      <h1>Order Confirmed!</h1>
      <p>Thank you for your order. You will receive a confirmation email shortly.</p>
      <Link to="/shop" className="btn-primary" style={{ display: 'inline-block', marginTop: '20px' }}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
