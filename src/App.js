import React from 'react';
import HomePage from './components/HomePage';

function App() {
  const configFilePath = `${process.env.PUBLIC_URL}/config.yaml`;

  return (
    <div>
      <HomePage configFilePath={configFilePath} />
    </div>
  );
}

export default App;