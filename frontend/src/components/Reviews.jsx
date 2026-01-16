import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Marcus T.",
      title: "D1 Wrestler, Ohio State",
      text: "Finally found compression gear that doesn't ride up during live wrestling. Been through two seasons and it still looks brand new.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah K.",
      title: "BJJ Competitor",
      text: "The grip on these shorts is incredible. No more adjusting mid-roll. Best training gear I've ever owned.",
      rating: 5
    },
    {
      id: 3,
      name: "Coach Rodriguez",
      title: "High School Wrestling Coach",
      text: "Recommended APEX to my entire team. The durability is unmatched - these kids put gear through hell and APEX holds up.",
      rating: 5
    }
  ];

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Athletes Say</h2>
          <p className="section-subtitle">Trusted by wrestlers and combat athletes worldwide</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="star">\u2605</span>
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <span className="review-name">{review.name}</span>
                <span className="review-title">{review.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
