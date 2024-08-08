import React from 'react';
import './CompetitionName.css';

// Usage example
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// const competitionData = {
//   name: "Fantasy Football League",
//   imageUrl: "https://example.com/logo.png" // Replace with actual image URL
// };

// ReactDOM.render(
//   <App competitionData={competitionData} />,
//   document.getElementById('root')
// );


const CompetitionName = ({ name, imageUrl }) => {
  return (
    <div className="competition-header">
      <img src={imageUrl} alt="Competition Logo" className="header-image start-image" />
      <h1 className="title">{name}</h1>
      <img src={imageUrl} alt="Competition Logo" className="header-image end-image" />
    </div>
  );
};

export default CompetitionName;
