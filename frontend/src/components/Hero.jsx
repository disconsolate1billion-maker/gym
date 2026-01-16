import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

const Hero = ({ onEarlyAccessClick }) => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-inner">
        {/* Text content */}
        <div className="hero-content">
          <h1 className="hero-title">APEX</h1>
          <p className="hero-tagline">{t('hero.tagline')}</p>
          <p className="hero-description">
            {t('hero.description')}
          </p>
          <div className="hero-cta">
            <Button 
              className="btn-primary"
              onClick={() => {
                document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.shopNow')}
            </Button>
          </div>
        </div>

        {/* Hero athlete display */}
        <div className="hero-product-display">
          <div className="hero-image-container">
            <div className="hero-shirt-glow-layer" />
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
              alt="Wrestling athlete in compression gear"
              className="hero-shirt-single"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
