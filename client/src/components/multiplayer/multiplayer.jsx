import React, { useState } from 'react';
import DisplayAnswer from '../display/displayAnswer';
import DisplayQuestion from '../display/displayQuestion';
import { Link } from 'react-router-dom';

const Multiplayer = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player);

    // Open new site with questions for Player 1 and answers for Player 2
    if (player === 'Player 1') {
      window.open('/displayQuestion');
    } else if (player === 'Player 2') {
      window.open('/displayAnswer');
    }
  };

  return (
    <div>
      <h2>Multiplayer Screen</h2>
      <p>Select a player:</p>
      <a href="/displayQuestion">
        <button>Player 1</button>
      </a>
      <a href="/displayAnswer">
        <button>Player 2</button>
      </a>
      
      {selectedPlayer && <p>Selected Player: {selectedPlayer}</p>}
    </div>
  );
};

export default Multiplayer;
