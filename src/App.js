import './App.css';
import Board from './components/board/Board.js';
import { GameContext } from './GameContext.js';
import { useContext } from 'react';

function App() {
  const { currentPlayer, active, gameMessage, gameReset } = useContext(GameContext);

  return (
    <div className="App">
      <h1>
        Welcome to Tic Tac Toe! The game that as an adult makes you feel sort of dumb if you lose... and yet not very
        smart if you win!
      </h1>
      <ul className="list">
        <p> {active ? `YOU GOT THIS` : 'Game Over'}</p>
        <p> {active ? `Time to make a move, ${currentPlayer}!` : 'Game Over'}</p>
      </ul>
      <p>{gameMessage}</p>
      {active ? '' : <button onClick={gameReset}>Click to play again</button>};
      <main className="main">
        <Board />
      </main>
    </div>
  );
}

export default App;
