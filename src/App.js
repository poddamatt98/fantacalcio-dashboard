import React from 'react';
import HomePage from './components/HomePage';

function App() {
  const configFilePath = './fantacalcio-dashboard/config.yaml'; // Update with the correct path

  return (
    <div>
      <HomePage configFilePath={configFilePath} />
    </div>
  );
}

export default App;