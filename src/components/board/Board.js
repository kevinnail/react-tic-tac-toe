import React from 'react';
import Box from '../box/Box.js';
import './Board.css';
export default function Board() {
  const boardArray = ['', '', '', '', '', '', '', '', ''];

  return (
    <div className="board">
      {boardArray.map((box, index) => (
        <Box key={index} />
      ))}
    </div>
  );
}
