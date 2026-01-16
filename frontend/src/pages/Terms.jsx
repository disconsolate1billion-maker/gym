import React, { useEffect } from 'react';

const Terms = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="legal-page">
      <h1>Terms of Service</h1>
      
      <h2>Agreement</h2>
      <p>By using this website, you agree to these terms of service.</p>
      
      <h2>Products</h2>
      <p>All products are subject to availability. Prices may change without notice.</p>
      
      <h2>Contact</h2>
      <p>Questions? Email support@apexwrestling.com</p>
    </div>
  );
};

export default Terms;
