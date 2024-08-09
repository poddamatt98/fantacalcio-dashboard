import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompetitionName = ({ name, imageUrl }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mb-8">
      <button
        onClick={handleBack}
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        &larr; Back
      </button>
      <div className="flex items-center justify-between">
        <img src={imageUrl} alt="Competition Logo" className="w-16 h-16 rounded-full" />
        <h1 className="text-2xl font-bold text-center flex-grow mx-4">{name}</h1>
        <img src={imageUrl} alt="Competition Logo" className="w-16 h-16 rounded-full" />
      </div>
    </div>
  );
};

export default CompetitionName;
