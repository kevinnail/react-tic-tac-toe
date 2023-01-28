import React from 'react';
import './Box.css';
import { GameContext } from '../../GameContext.js';
import { useContext } from 'react';

export default function Box({ box }) {
  const { handleClick, active } = useContext(GameContext);

  return (
    <div id={box.space} onClick={() => handleClick(box)} className="box">
      {box.context}
    </div>
  );
}
