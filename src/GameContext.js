import { useState } from 'react';
import { createContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([
    { space: 0, context: '' },
    { space: 1, context: '' },
    { space: 2, context: '' },
    { space: 3, context: '' },
    { space: 4, context: '' },
    { space: 5, context: '' },
    { space: 6, context: '' },
    { space: 7, context: '' },
    { space: 8, context: '' },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('Game in progress');

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        currentPlayer,
        setCurrentPlayer,
        active,
        setActive,
        gameMessage,
        setGameMessage,
      }}
    >
      {' '}
      {children}{' '}
    </GameContext.Provider>
  );
};
export { GameContext, GameProvider };
