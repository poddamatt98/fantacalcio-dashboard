import React from 'react';

const RulesSection = ({ rules }) => {
  if (!rules || rules.length === 0) {
    return <div>No rules available</div>;
  }

  // Filter out empty or null rules
  const filteredRules = rules.filter(rule => rule.trim() !== '');

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4">Rules</h2>
      <ul className="list-disc list-inside space-y-2">
        {filteredRules.map((rule, index) => (
          <li key={index} className="text-gray-700">{rule}</li>
        ))}
      </ul>
    </div>
  );
};

export default RulesSection;
