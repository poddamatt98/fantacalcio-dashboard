import React from 'react';
import PlayerRow from './PlayerRow';
import './TeamTable.css';

const TeamTable = ({ team }) => {
  return (
    <div className="teamSection">
      <h3 className="teamName">{team.name}</h3>
      <table className="table">
        <thead>
          <tr>
            <th className="th">Real Team</th>
            <th className="th">Player Name</th>
            <th className="th">Role</th>
            <th className="th">Starting FC Price</th>
            <th className="th">Buy Price</th>
            <th className="th">Actual FC Price</th>
            <th className="th">Sold Price</th>
          </tr>
        </thead>
        <tbody>
          {team.players.map((player, idx) => (
            <PlayerRow key={idx} player={player} isEvenRow={idx % 2 === 0} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;
