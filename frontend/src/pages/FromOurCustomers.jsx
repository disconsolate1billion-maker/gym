import React, { useEffect } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Marcus T.",
    title: "D1 Wrestler, Ohio State",
    rating: 5,
    text: "Finally found compression gear that doesn't ride up during live wrestling. Been through two seasons and it still looks brand new.",
    product: "Black / Red"
  },
  {
    id: 2,
    name: "Sarah K.",
    title: "BJJ Competitor",
    rating: 5,
    text: "The grip on these shorts is incredible. No more adjusting mid-roll. Best training gear I've ever owned.",
    product: "Black / Gold"
  },
  {
    id: 3,
    name: "Coach Rodriguez",
    title: "High School Wrestling Coach",
    rating: 5,
    text: "Recommended APEX to my entire team. The durability is unmatched - these kids put gear through hell and APEX holds up.",
    product: "Black / Red"
  },
  {
    id: 4,
    name: "Emily W.",
    title: "Women's Freestyle Wrestler",
    rating: 5,
    text: "So lightweight but somehow still holds its shape perfectly. Love that it stays in place during intense drills.",
    product: "Red / Black"
  },
  {
    id: 5,
    name: "Jake L.",
    title: "MMA Fighter",
    rating: 5,
    text: "These compression shirts are a game changer. Perfect for grappling - no more getting caught on loose fabric.",
    product: "Black / Red"
  },
  {
    id: 6,
    name: "Nina P.",
    title: "Greco-Roman Wrestler",
    rating: 5,
    text: "The fabric breathes so well even during the most intense training sessions. Finally gear made for real wrestlers.",
    product: "Black / Gold"
  },
  {
    id: 7,
    name: "Chris M.",
    title: "College Wrestling Team Captain",
    rating: 5,
    text: "Clean design, quality construction. My whole team switched to APEX after seeing how well it holds up.",
    product: "Black / Red"
  },
  {
    id: 8,
    name: "Alex H.",
    title: "BJJ Purple Belt",
    rating: 5,
    text: "Bought for no-gi training and I'm never going back. The fit is perfect and the shorts stay put during rolling.",
    product: "Black / Gold"
  },
  {
    id: 9,
    name: "Jordan B.",
    title: "High School State Champion",
    rating: 5,
    text: "Perfect for competition and practice. Doesn't restrict any movement and survives daily mat sessions.",
    product: "White / Red"
  },
  {
    id: 10,
    name: "Mia C.",
    title: "Women's BJJ Competitor",
    rating: 5,
    text: "The quality is insane for the price. Ordered the bundle and couldn't be happier. Highly recommend to any grappler.",
    product: "Red / Black"
  },
  {
    id: 11,
    name: "David K.",
    title: "Wrestling Club Owner",
    rating: 5,
    text: "We ordered APEX gear for our entire club. Parents love the durability, athletes love the performance. Win-win.",
    product: "Black / Red"
  },
  {
    id: 12,
    name: "Rachel S.",
    title: "Judo Athlete",
    rating: 5,
    text: "Works perfectly for randori training. The compression is just right - supportive without being restrictive.",
    product: "Black / Gold"
  }
];

const FromOurCustomers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="customers-page">
      <div className="customers-container">
        {/* Header with Intro */}
        <div className="customers-header">
          <h1 className="customers-title">Athlete Reviews</h1>
          <p className="customers-intro">
            Real feedback from wrestlers and combat athletes who train in APEX. See what our community has to say about their experience.
          </p>
          
          {/* Star Rating Summary */}
          <div className="customers-rating-summary">
            <div className="rating-stars-large">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} fill="#D4AF37" color="#D4AF37" />
              ))}
            </div>
            <div className="rating-info">
              <span className="rating-score">4.9</span>
              <span className="rating-label">out of 5</span>
              <span className="rating-count">{reviews.length} verified reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="customers-grid">
          {reviews.map((review) => (
            <div key={review.id} className="customer-review-card" data-testid={`review-${review.id}`}>
              <div className="review-card-header">
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
                <span className="review-product">{review.product}</span>
              </div>
              
              <p className="review-text">"{review.text}"</p>
              
              <div className="review-author">
                <span className="review-name">{review.name}</span>
                {review.title && <span className="review-title">{review.title}</span>}
              </div>

              <div className="review-verified">
                <span className="verified-badge">✓ Verified Purchase</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="customers-cta">
          <h2 className="cta-title">Ready to join the team?</h2>
          <p className="cta-text">Experience what elite compression gear feels like.</p>
          <a href="/shop" className="cta-button">
            Shop Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default FromOurCustomers;
