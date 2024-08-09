import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import loadConfig from './components/ConfigLoader';
import WelcomePage from './components/WelcomePage';
import CompetitionName from './components/CompetitionName';
import RulesSection from './components/RulesSection';
import TeamTable from './components/TeamTable';

const App = () => {
  const [competitions, setCompetitions] = useState([]);
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [loading, setLoading] = useState(true);
  const configFilePath = process.env.PUBLIC_URL.concat(process.env.REACT_APP_API_URL);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const competitionsData = await loadConfig(configFilePath);
        setCompetitions(competitionsData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load competitions data:', error);
        setLoading(false);
      }
    };

    fetchConfig();
  }, [configFilePath]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={<WelcomePage competitions={competitions} onSelectCompetition={setSelectedCompetition} />}
          />
          <Route
            path="/competition"
            element={
              selectedCompetition ? (
                <>
                  <CompetitionName name={selectedCompetition.name} imageUrl={selectedCompetition.logoUrl} />
                  <RulesSection rules={selectedCompetition.rules} />
                  <section className="mt-8">
                    <h2 className="text-2xl font-semibold">Teams</h2>
                    {selectedCompetition.teams.map((team, index) => (
                      <TeamTable key={index} team={team} />
                    ))}
                  </section>
                </>
              ) : (
                <WelcomePage competitions={competitions} onSelectCompetition={setSelectedCompetition} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
