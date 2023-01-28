import React, { useContext } from 'react';
import Box from '../box/Box.js';
import './Board.css';
import { GameContext } from '../../GameContext.js';

export default function Board() {
  const { board } = useContext(GameContext);

  return (
    <div className="board">
      {board.map((box) => {
        return <Box key={box.space} box={box} />;
      })}
    </div>
  );
}
