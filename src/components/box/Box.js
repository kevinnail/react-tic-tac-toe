import React from 'react';
import './Box.css';
import { GameContext } from '../../GameContext.js';
import { useContext } from 'react';

export default function Box() {
  const { board } = useContext(GameContext);
  console.log('board: ', board);

  return <div className="box"></div>;
}
