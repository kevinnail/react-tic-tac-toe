import React from 'react';
import './Box.css';
import { GameContext } from '../../GameContext.js';
import { useContext } from 'react';

export default function Box({ box, index }) {
  const { board } = useContext(GameContext);
  const { handleClick } = useContext(GameContext);
  console.log('box: ', box.context);

  return (
    <div onClick={handleClick} className="box">
      {box.context}
    </div>
  );
}
