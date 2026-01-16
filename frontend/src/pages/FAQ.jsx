import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Standard shipping takes 5-7 business days within the US."
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 30 days of purchase. Items must be unworn and in original packaging."
  },
  {
    q: "What sizes do you offer?",
    a: "We offer sizes S, M, L, and XL for all products."
  },
  {
    q: "How should I wash the products?",
    a: "Machine wash cold, tumble dry low."
  },
  {
    q: "Do you ship internationally?",
    a: "Currently we only ship within the United States."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="faq-page">
      <h1>FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div 
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.q}
            {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          {openIndex === index && (
            <div className="faq-answer">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
