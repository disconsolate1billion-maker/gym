import React, { useEffect } from 'react';

const Returns = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="legal-page">
      <h1>Shipping & Returns</h1>
      
      <h2>Shipping</h2>
      <p>We ship within 1-2 business days. Standard shipping takes 5-7 business days.</p>
      <p>Free shipping on orders over $100.</p>
      
      <h2>Returns</h2>
      <p>We accept returns within 30 days of purchase.</p>
      <p>Items must be unworn, unwashed, and in original packaging.</p>
      <p>Contact us at support@apexwrestling.com to start a return.</p>
    </div>
  );
};

export default Returns;
