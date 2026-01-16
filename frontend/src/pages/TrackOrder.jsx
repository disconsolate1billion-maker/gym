import React, { useState, useEffect } from 'react';

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order tracking feature coming soon.');
  };

  return (
    <div className="track-page">
      <h1>Track Your Order</h1>
      <p>Enter your order number to track your shipment.</p>
      <form className="track-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Order number (e.g. APEX-XXXXX)"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
        />
        <button type="submit">Track</button>
      </form>
    </div>
  );
};

export default TrackOrder;
