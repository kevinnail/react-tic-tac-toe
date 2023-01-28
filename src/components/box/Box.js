import React from 'react';
import './Box.css';
import { GameContext } from '../../GameContext.js';
import { useContext } from 'react';

export default function Box({ box }) {
  const { handleClick, board } = useContext(GameContext);

  console.log('board', box);

  return (
    <div onClick={() => handleClick(box)} className="box">
      {box.context}
    </div>
  );
}
