import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Scroll to top and trigger animation when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    // Trigger fade-in animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-page">
      <div className="about-container">
        {/* Hero Section - Activity 2: Increased heading size + accent color subheading */}
        <div className="about-hero-section">
          <h1 className="about-main-title about-title-large">ABOUT RAZE</h1>
          <p className="about-subtitle about-subtitle-accent">Built by Discipline. Made to Move.</p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          <section className="about-story-section">
            <p className="about-lead-text">
              Most sportswear is designed to look good — not to move properly.
            </p>
            <p className="about-paragraph">
              As gymnasts, we understand how frustrating it feels when clothing holds you back during real training:
            </p>
            <ul className="about-pain-points">
              <li>too tight in the shoulders and hips</li>
              <li>too loose during swings and landings</li>
              <li>uncomfortable when stretching, sprinting, or fully extending</li>
            </ul>
            <p className="about-paragraph about-mission">
              That's why RAZE was created — performance clothing designed for full range of movement, so athletes can train comfortably and focus on execution, not adjusting their outfit.
            </p>
          </section>

          {/* RAZE IN MOTION - Image Gallery Section */}
          {/* Activity 3: Resized hero image + frame/border + filter */}
          {/* Activity 4: Entrance animation (fade-in + upward move) */}
          <section className="about-gallery-section">
            <h2 className="about-gallery-title">RAZE IN MOTION</h2>
            <div className="about-gallery-grid about-gallery-three">
              {/* Image 1 - HERO IMAGE with all Activity 3 edits + Activity 4 animation */}
              <div 
                className={`about-gallery-item about-gallery-hero ${isVisible ? 'animate-hero-entrance' : ''}`}
                data-testid="about-hero-image-container"
              >
                <div className="about-image-frame">
                  <img 
                    src="/images/athletes/mag_athlete.jpg" 
                    alt="Male gymnast training - athletic performance"
                    className="about-gallery-image about-image-filtered about-image-hero-size"
                    data-testid="about-hero-image"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                <span className="about-image-label">Men's Athletic Gymnastics</span>
              </div>
              
              {/* Image 2 - WAG Athlete */}
              <div className={`about-gallery-item ${isVisible ? 'animate-fade-in-up delay-200' : ''}`}>
                <img 
                  src="/images/athletes/wag_athlete.jpg" 
                  alt="Female gymnast training - athletic performance"
                  className="about-gallery-image"
                  data-testid="about-image-secondary"
                />
                <span className="about-image-label">Women's Athletic Gymnastics</span>
              </div>

              {/* Image 3 - NEW Supporting Image (Activity 2) */}
              <div className={`about-gallery-item about-gallery-new ${isVisible ? 'animate-fade-in-up delay-400' : ''}`}>
                <img 
                  src="/images/products/front_shirt_black_cyan.png" 
                  alt="RAZE Performance T-Shirt - Black Cyan"
                  className="about-gallery-image about-product-showcase"
                  data-testid="about-image-new"
                />
                <span className="about-image-label">Performance Collection</span>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="about-cta-section">
            <div className="about-cta-content">
              <p className="about-cta-text">Train with purpose. Move with confidence.</p>
              <Link to="/products" className="about-cta-button">
                Shop Collection <ArrowRight size={20} />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
