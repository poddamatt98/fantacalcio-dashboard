import React, { useEffect, useState } from 'react';
import { loadConfig } from '../services/configService';
import CompetitionName from './CompetitionName';
import RulesSection from './RulesSection';
import TeamTable from './TeamTable';
import './HomePage.css';

const HomePage = () => {
  const [competition, setCompetition] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      const configData = await loadConfig();
      const teamsWithSoldPrices = configData.teams.map(team => ({
        ...team,
        players: team.players.map(player => ({
          ...player,
          sold_price: calculateSoldPrice(player)
        }))
      }));
      setCompetition({
        ...configData.competition,
        teams: teamsWithSoldPrices
      });
    };

    fetchConfig();
  }, []);

  const calculateSoldPrice = (player) => {
    const factor = Math.min(Math.max(player.actual_fc_price / player.starting_fc_price, 0.5), 2);
    return Math.round(factor * player.buy_price);
  };

  if (!competition) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <CompetitionName name={competition.name} imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Scudetto.svg/1008px-Scudetto.svg.png" />
      <RulesSection rules={competition.rules} />
      <section className="section">
        <h2>Teams</h2>
        {competition.teams.map((team, index) => (
          <TeamTable key={index} team={team} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
