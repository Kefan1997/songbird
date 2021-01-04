import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';

localStorage.name = 'blabla';

window.onmessage = function (event) {
  if (event.origin !== 'kefan1997-resliv-domain2.netlify.app') {
    return;
  }
  console.log(`Получено ${event.data} из ${event.origin}`);
  localStorage.setItem('data', event.data);
  var payload = JSON.parse(event.data);
  localStorage.setItem(payload.key, JSON.stringify(payload.data));
};

window.onmessage = function (e) {
  if (e.origin !== 'kefan1997-resliv-domain2.netlify.app') {
    return;
  }
  let payload = JSON.parse(e.data);
  switch (payload.method) {
    case 'set':
      localStorage.setItem(payload.key, JSON.stringify(payload.data));
      break;
    case 'get':
      let parent = window.parent;
      let data = localStorage.getItem(payload.key);
      parent.postMessage(data, '*');
      break;
    case 'remove':
      localStorage.removeItem(payload.key);
      break;
  }
};

ReactDOM.render(<Game />, document.getElementById('root'));
