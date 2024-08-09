import React from 'react';

const TeamTable = ({ team }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg mb-8">
      <h3 className="text-xl font-semibold mb-4">{team.name}</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Real Team Name</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player Name</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Starting FC Price</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buy Price</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actual FC Price</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sold Price</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {team.players.map((player, index) => (
            <tr key={index}>
              <td className="px-4 py-2 text-sm text-gray-900">{team.name}</td>
              <td className="px-4 py-2 text-sm text-gray-900">{player.name}</td>
              <td className="px-4 py-2 text-sm text-gray-900">{player.role}</td>
              <td className="px-4 py-2 text-sm text-gray-900">{player.startingFCPrice}</td>
              <td className="px-4 py-2 text-sm text-gray-900">{player.buyPrice}</td>
              <td className="px-4 py-2 text-sm text-gray-900">{player.actualFCPrice}</td>
              <td className="px-4 py-2 text-sm text-gray-900">{player.soldPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;
