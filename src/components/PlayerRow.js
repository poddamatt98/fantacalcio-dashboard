import React from 'react';
import './PlayerRow.css';

const PlayerRow = ({ player, isEvenRow }) => {
  return (
    <tr className={isEvenRow ? "evenRow" : "oddRow"}>
      <td className="td">{player.real_team}</td>
      <td className="td">{player.name}</td>
      <td className="td">{player.role}</td>
      <td className="td">{player.starting_fc_price}</td>
      <td className="td">{player.buy_price}</td>
      <td className="td">{player.actual_fc_price}</td>
      <td className="td">{player.sold_price}</td>
    </tr>
  );
};

export default PlayerRow;
