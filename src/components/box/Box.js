import React from 'react';
import './Box.css';
import { GameContext } from '../../GameContext.js';
import { useContext } from 'react';

export default function Box() {
  const { board } = useContext(GameContext);

  const { handleClick } = useContext(GameContext);
  return <div onClick={handleClick} className="box"></div>;
}
