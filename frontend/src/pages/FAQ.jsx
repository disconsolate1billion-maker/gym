import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: "Shipping",
    questions: [
      {
        q: "Where do you ship from?",
        a: "We ship internationally from the USA. All orders are processed within 1-2 business days."
      },
      {
        q: "How long does shipping take?",
        a: "Delivery times vary by location. Standard shipping typically takes 5-7 business days within the US, 7-14 days internationally. Express options are available at checkout."
      },
      {
        q: "Is shipping free?",
        a: "Yes! We offer free tracked shipping on all orders over $100 USD. Orders under $100 have a flat rate of $9.99 USD."
      },
      {
        q: "Do you provide tracking?",
        a: "Yes, all orders include tracked shipping. You'll receive a tracking number via email once your order ships."
      }
    ]
  },
  {
    category: "Sizing & Fit",
    questions: [
      {
        q: "What size should I get?",
        a: "Our compression gear runs true to size with an athletic, competition-ready fit. If you prefer a slightly looser fit for training, we recommend sizing up. Check our Size Guide for detailed measurements."
      },
      {
        q: "Is this gear designed for specific weight classes?",
        a: "Our compression shirts and shorts work great for all weight classes. The stretchy, durable fabric accommodates bodies of all sizes while maintaining its shape."
      },
      {
        q: "What about shorts sizing?",
        a: "Our Wrestling Shorts come in both Men's and Women's sizing for the best fit. Size charts are available on each product page."
      }
    ]
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-day return policy. Items must be unworn, unwashed, and in original packaging. Simply contact us to initiate a return."
      },
      {
        q: "Can I exchange for a different size?",
        a: "Yes! If the size doesn't fit, contact us within 30 days and we'll arrange an exchange for the correct size."
      },
      {
        q: "How do I start a return?",
        a: "Email us at support@apexwrestling.com with your order number and reason for return. We'll send you return instructions within 24 hours."
      }
    ]
  },
  {
    category: "Product & Care",
    questions: [
      {
        q: "What material are the compression shirts made of?",
        a: "Our Compression Shirts are made from battle-tested, abrasion-resistant fabric engineered for intense mat sessions. They maintain structure and fit after hundreds of washes."
      },
      {
        q: "How do I wash the products?",
        a: "Machine wash cold with like colors. Tumble dry low or hang dry. Do not bleach or iron directly on prints. Our gear is designed to withstand the rigors of wrestling training."
      },
      {
        q: "Will the gear hold up during live wrestling?",
        a: "Absolutely. Our compression gear is specifically designed for wrestling and combat sports. Reinforced seams and grip-resistant fabric ensure it stays in place during takedowns, scrambles, and intense grappling."
      }
    ]
  },
  {
    category: "Orders & Payment",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, Mastercard, American Express) through our secure Stripe checkout."
      },
      {
        q: "Can I modify or cancel my order?",
        a: "Orders can be modified or cancelled within 2 hours of placing them. After that, they enter processing. Contact us immediately if you need changes."
      },
      {
        q: "Do you offer team/bulk discounts?",
        a: "Yes! We offer special pricing for wrestling teams, clubs, and coaches. Contact us at teams@apexwrestling.com for bulk order inquiries."
      }
    ]
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="faq-page">
      <div className="container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about APEX products and ordering.</p>
        </div>

        <div className="faq-content">
          {faqs.map((category, idx) => (
            <div key={idx} className="faq-category">
              <h2 className="faq-category-title">{category.category}</h2>
              <div className="faq-list">
                {category.questions.map((item, qIdx) => (
                  <FAQItem key={qIdx} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h3>Still have questions?</h3>
          <p>Can't find what you're looking for? Reach out to our support team.</p>
          <a href="mailto:support@apexwrestling.com" className="faq-contact-btn">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
