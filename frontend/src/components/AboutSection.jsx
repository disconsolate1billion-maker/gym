import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Shield, Target } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-about-section" ref={sectionRef} id="about">
      <div className="home-about-container">
        {/* Text Content */}
        <div className="home-about-content">
          <h2 className="home-about-title">ABOUT APEX</h2>
          <p className="home-about-subtitle">Forged in the Fire. Built to Dominate.</p>
          
          <div className="home-about-text">
            <p>
              Most athletic gear isn't built for wrestling — where every match demands explosive power, relentless grip, and unwavering endurance.
            </p>
            <p>
              In wrestling, every second on the mat tests your limits. As former wrestlers ourselves, we know the frustration of gear that fails when you need it most.
            </p>
            <p>
              APEX was created by NCAA wrestlers who got tired of compression gear that rides up, loses grip, or falls apart after one season. We build battle-tested gear that performs under pressure — from practice to championship matches.
            </p>
          </div>

          {/* What We Stand For - Mini Feature Row */}
          <div className="home-about-features">
            <div className="home-about-feature">
              <Flame size={20} className="home-about-feature-icon" />
              <div className="home-about-feature-text">
                <span className="home-about-feature-title">Battle-Tested</span>
                <span className="home-about-feature-desc">Survives thousands of mat hours</span>
              </div>
            </div>
            <div className="home-about-feature">
              <Shield size={20} className="home-about-feature-icon" />
              <div className="home-about-feature-text">
                <span className="home-about-feature-title">Competition Lock</span>
                <span className="home-about-feature-desc">Stays in place during takedowns</span>
              </div>
            </div>
            <div className="home-about-feature">
              <Target size={20} className="home-about-feature-icon" />
              <div className="home-about-feature-text">
                <span className="home-about-feature-title">Wrestler-Designed</span>
                <span className="home-about-feature-desc">By athletes, for athletes</span>
              </div>
            </div>
          </div>
          
          <Link to="/about" className="home-about-link">
            Learn More <ArrowRight size={18} />
          </Link>
        </div>

        {/* Images */}
        <div className="home-about-images">
          <div className={`home-about-image-wrapper ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <img 
              src="https://images.unsplash.com/photo-1719837296146-bb32b03f442d?w=600&q=80" 
              alt="Male wrestler training"
              className="home-about-image"
            />
            <span className="home-about-image-label home-about-image-label-subtle">MEN'S</span>
          </div>
          <div className={`home-about-image-wrapper ${isVisible ? 'animate-fade-in-up delay-200' : ''}`}>
            <img 
              src="https://images.unsplash.com/photo-1607286908165-b8b6a2874fc4?w=600&q=80" 
              alt="Female wrestler training"
              className="home-about-image"
            />
            <span className="home-about-image-label home-about-image-label-subtle">WOMEN'S</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
