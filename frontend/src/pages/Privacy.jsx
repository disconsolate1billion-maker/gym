import React, { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      
      <h2>Information We Collect</h2>
      <p>We collect information you provide when making a purchase, including name, email, and shipping address.</p>
      
      <h2>How We Use Your Information</h2>
      <p>We use your information to process orders and provide customer support.</p>
      
      <h2>Contact</h2>
      <p>Questions? Email support@apexwrestling.com</p>
    </div>
  );
};

export default Privacy;
