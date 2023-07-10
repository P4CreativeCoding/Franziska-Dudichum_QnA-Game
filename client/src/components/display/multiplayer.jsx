import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Multiplayer = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player);
  };

  const generateInviteLink = (player) => {
    const url = `${window.location.origin}/${player.toLowerCase()}`;
    return url;
  };

  return (
    <div>
      <h2>Multiplayer Screen</h2>
      <p>Select a player:</p>
      <button onClick={() => handlePlayerSelect('player1')}>
        Player 1
      </button>
      <button onClick={() => handlePlayerSelect('player2')}>
        Player 2
      </button>

      {selectedPlayer && (
        <div>
          <p>Selected Player: {selectedPlayer}</p>
          <p>Invite Link:</p>
          <Link to={`/${selectedPlayer}`}>
            {generateInviteLink(selectedPlayer)}
          </Link>
        </div>
      )}
    </div>
  );
};


export default Multiplayer;
