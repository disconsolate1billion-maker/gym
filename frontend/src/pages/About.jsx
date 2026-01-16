import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <h1>About APEX</h1>
      <p>
        APEX is a small brand selling compression gear for wrestlers and combat sport athletes.
      </p>
      <p>
        We offer compression shirts and wrestling shorts designed for training and competition.
      </p>
      <p>
        Our products are made with durable, moisture-wicking fabric that holds up to intense training sessions.
      </p>
    </div>
  );
};

export default About;
