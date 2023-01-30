import React from 'react';
import './Box.css';
import { GameContext } from '../../GameContext.js';
import { useContext } from 'react';

export default function Box({ box }) {
  const { handleClick, active } = useContext(GameContext);
  const playedBox = document.getElementById(box.space);

  if (!active) {
    playedBox.classList.remove('box');
    playedBox.classList.add('played');
  } else {
    playedBox.classList.remove('played');
    playedBox.classList.add('box');
  }
  return (
    <div id={box.space} onClick={() => handleClick(box)} className="box">
      {box.context}
    </div>
  );
}
