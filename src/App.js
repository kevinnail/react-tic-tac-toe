import './App.css';
import Board from './components/board/Board.js';
import { GameContext } from './GameContext.js';
import { useContext } from 'react';

function App() {
  const { currentPlayer, active, gameMessage } = useContext(GameContext);

  return (
    <div className="App">
      <h1>
        Welcome to Tic Tac Toe! The game that as an adult makes you feel sort of dumb if you lose...
        and not very smart if you win!
      </h1>
      <main className="main">
        <Board />
      </main>
    </div>
  );
}

export default App;
