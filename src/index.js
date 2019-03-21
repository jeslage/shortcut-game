import React from 'react';
import ReactDOM from 'react-dom';
import './config/db/firebase';

import App from './App';
import GameProvider from './context/GameProvider';

ReactDOM.render(
  <GameProvider>
    <App />
  </GameProvider>,
  document.getElementById('root')
);
