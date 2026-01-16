import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';

const SalePromoSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => String(num).padStart(2, '0');

  return (
    <section className="sale-promo-section" data-testid="sale-promo-section">
      <div className="sale-promo-container">
        {/* Background glow effect */}
        <div className="sale-promo-glow"></div>
        
        {/* Content */}
        <div className="sale-promo-content">
          {/* Badge/Pill */}
          <div className="sale-promo-badge">
            <Tag size={14} />
            <span>CHAMPIONSHIP SALE</span>
          </div>

          {/* Main Heading */}
          <h2 className="sale-promo-heading">
            Championship Sale — Train Like a Champion
          </h2>

          {/* Subheading */}
          <p className="sale-promo-subheading">
            Up to 50% off elite compression gear. Limited time only.
          </p>

          {/* Countdown */}
          <div className="sale-promo-countdown">
            <span className="countdown-label">Ends in:</span>
            <div className="countdown-timer">
              <div className="countdown-unit">
                <span className="countdown-value">{formatTime(timeLeft.days)}</span>
                <span className="countdown-text">days</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-unit">
                <span className="countdown-value">{formatTime(timeLeft.hours)}</span>
                <span className="countdown-text">hrs</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-unit">
                <span className="countdown-value">{formatTime(timeLeft.minutes)}</span>
                <span className="countdown-text">min</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-unit">
                <span className="countdown-value">{formatTime(timeLeft.seconds)}</span>
                <span className="countdown-text">sec</span>
              </div>
            </div>
          </div>

          {/* Primary CTA Button */}
          <Link to="/1111-sale" className="sale-promo-button" data-testid="shop-sale-btn">
            Shop Championship Sale
          </Link>

          {/* Secondary Link */}
          <Link to="/1111-sale" className="sale-promo-link" data-testid="view-sale-link">
            View all sale items <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SalePromoSection;
