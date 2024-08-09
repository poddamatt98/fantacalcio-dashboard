import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = ({ competitions, onSelectCompetition }) => {
  const navigate = useNavigate();

  const handleCompetitionClick = (competition) => {
    onSelectCompetition(competition);
    navigate('/competition');
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Select a Competition</h1>
      <ul className="space-y-4 w-full max-w-md">
        {competitions.map((comp, index) => (
          <li
            key={index}
            className="border border-gray-300 rounded-lg p-4 shadow-md bg-white hover:bg-gray-50 cursor-pointer"
            onClick={() => handleCompetitionClick(comp)}
          >
            <img src={comp.logoUrl} alt={`${comp.name} Logo`} className="w-24 h-24 mx-auto mb-3 rounded-full" />
            <h2 className="text-xl font-semibold text-center">{comp.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WelcomePage;
