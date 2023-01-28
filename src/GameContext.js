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
  const [gameMessage, setGameMessage] = useState(
    'Game in progress, be quiet so players can concentrate! This is a very serious game! If you are not serious, please at least make jokes about how serious it is!'
  );

  const handleClick = ({ space, context }) => {
    if (context === 'X' || context === 'O') {
      return;
    } else if (active === false) {
      return;
    } else {
      board[space].context = currentPlayer;
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }

    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombos.forEach((combo) => {
      const [a, b, c] = combo;

      if (board.every((box) => box.context !== '')) {
        setGameMessage('Well it is a tie which no one has ever experienced before in tic tac toe.');
        setActive(false);
      }

      if (
        board[a].context === currentPlayer &&
        board[b].context === currentPlayer &&
        board[c].context === currentPlayer &&
        board[a].context !== '' &&
        board[b].context !== '' &&
        board[c].context !== ''
      ) {
        setGameMessage(`${currentPlayer} wins because of pure brilliance and effective strategy!`);
        setActive(false);
      }
    });
  };

  const gameReset = () => {
    setBoard([
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
    setCurrentPlayer('X');
    setActive(true);
    setGameMessage(
      'Game in progress, be quiet so players can concentrate! This is a very serious game! If you are not serious, please at least make jokes about how serious it is!'
    );
  };

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
        handleClick,
        gameReset,
      }}
    >
      {' '}
      {children}{' '}
    </GameContext.Provider>
  );
};
export { GameContext, GameProvider };
