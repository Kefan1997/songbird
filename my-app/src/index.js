import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';

window.addEventListener('message', function(event) {
  console.log(`Получено ${event.data} из ${event.origin}`);
  localStorage.setItem('data', event.data);
});

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

