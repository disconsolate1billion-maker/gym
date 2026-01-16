import React from 'react';
import { useTranslation } from 'react-i18next';

const Newsletter = ({ onJoinClick }) => {
  const { t } = useTranslation();

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="container">
        <h2 className="newsletter-title">{t('newsletter.title')}</h2>
        <p className="newsletter-subtitle">{t('newsletter.subtitle')}</p>
        <button className="newsletter-btn" onClick={onJoinClick}>
          {t('waitlist.button')}
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
