import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Shield, Target, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        {/* Hero Section */}
        <div className="about-hero-section">
          <h1 className="about-main-title about-title-large">ABOUT APEX</h1>
          <p className="about-subtitle about-subtitle-accent">Forged in the Fire. Built to Dominate.</p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          <section className="about-story-section">
            <p className="about-lead-text">
              Most athletic gear isn't built for wrestling — where every match demands explosive power, relentless grip, and unwavering endurance.
            </p>
            <p className="about-paragraph">
              As former wrestlers ourselves, we know the frustration of gear that fails when you need it most:
            </p>
            <ul className="about-pain-points">
              <li>compression shirts that ride up during scrambles</li>
              <li>shorts that lose their grip mid-match</li>
              <li>gear that falls apart after one season of real training</li>
            </ul>
            <p className="about-paragraph about-mission">
              That's why APEX was created — battle-tested compression gear designed by NCAA wrestlers who understand what it takes to dominate on the mat. From grueling practices to championship matches, APEX performs under pressure.
            </p>
          </section>

          {/* Our Values Section */}
          <section className="about-values-section">
            <h2 className="about-section-title">THE APEX STANDARD</h2>
            <div className="about-values-grid">
              <div className={`about-value-card ${isVisible ? 'animate-fade-in-up' : ''}`}>
                <Flame size={32} className="about-value-icon" />
                <h3 className="about-value-title">Battle-Tested</h3>
                <p className="about-value-text">Every product survives thousands of hours of mat time before it earns the APEX name.</p>
              </div>
              <div className={`about-value-card ${isVisible ? 'animate-fade-in-up delay-200' : ''}`}>
                <Shield size={32} className="about-value-icon" />
                <h3 className="about-value-title">Competition Lock</h3>
                <p className="about-value-text">Engineered to stay in place during takedowns, scrambles, and intense grappling.</p>
              </div>
              <div className={`about-value-card ${isVisible ? 'animate-fade-in-up delay-400' : ''}`}>
                <Target size={32} className="about-value-icon" />
                <h3 className="about-value-title">Wrestler-Designed</h3>
                <p className="about-value-text">Created by athletes who've been through the grind and know what real training demands.</p>
              </div>
              <div className={`about-value-card ${isVisible ? 'animate-fade-in-up delay-600' : ''}`}>
                <Award size={32} className="about-value-icon" />
                <h3 className="about-value-title">Championship Quality</h3>
                <p className="about-value-text">The same gear trusted by elite competitors at every level of competition.</p>
              </div>
            </div>
          </section>

          {/* APEX IN ACTION - Image Gallery Section */}
          <section className="about-gallery-section">
            <h2 className="about-gallery-title">APEX IN ACTION</h2>
            <div className="about-gallery-grid about-gallery-three">
              {/* Image 1 - Male Wrestler */}
              <div 
                className={`about-gallery-item about-gallery-hero ${isVisible ? 'animate-hero-entrance' : ''}`}
                data-testid="about-hero-image-container"
              >
                <div className="about-image-frame">
                  <img 
                    src="https://images.unsplash.com/photo-1719837296146-bb32b03f442d?w=600&q=80" 
                    alt="Male wrestler in training - APEX gear"
                    className="about-gallery-image about-image-filtered about-image-hero-size"
                    data-testid="about-hero-image"
                  />
                </div>
                <span className="about-image-label">Folkstyle & Freestyle</span>
              </div>
              
              {/* Image 2 - Female Athlete */}
              <div className={`about-gallery-item ${isVisible ? 'animate-fade-in-up delay-200' : ''}`}>
                <img 
                  src="https://images.unsplash.com/photo-1607286908165-b8b6a2874fc4?w=600&q=80" 
                  alt="Female combat athlete training - APEX gear"
                  className="about-gallery-image"
                  data-testid="about-image-secondary"
                />
                <span className="about-image-label">Women's Wrestling & BJJ</span>
              </div>

              {/* Image 3 - Training Product Shot */}
              <div className={`about-gallery-item about-gallery-new ${isVisible ? 'animate-fade-in-up delay-400' : ''}`}>
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80" 
                  alt="APEX Compression Gear - Black Red"
                  className="about-gallery-image about-product-showcase"
                  data-testid="about-image-new"
                />
                <span className="about-image-label">Compression Collection</span>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="about-founders-section">
            <h2 className="about-section-title">OUR STORY</h2>
            <div className="about-founders-content">
              <p className="about-paragraph">
                APEX started in a college wrestling room. After years of buying gear that didn't perform, a group of NCAA wrestlers decided to build something better.
              </p>
              <p className="about-paragraph">
                We spent 18 months testing fabrics, refining cuts, and putting prototypes through brutal training sessions. The result? Compression gear that actually works — built to handle the intensity of real wrestling.
              </p>
              <p className="about-paragraph">
                Today, APEX is trusted by wrestlers and combat athletes at every level — from high school mats to international competition. Our mission remains the same: build the gear we wished existed when we were competing.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="about-cta-section">
            <div className="about-cta-content">
              <p className="about-cta-text">Train harder. Compete stronger. Dominate.</p>
              <Link to="/shop" className="about-cta-button">
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
