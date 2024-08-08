import React from 'react';
import './RulesSection.css';

const RulesSection = ({ rules }) => {
  return (
    <section className="section">
      <h2>Rules</h2>
      <pre className="rules">{rules}</pre>
    </section>
  );
};

export default RulesSection;
