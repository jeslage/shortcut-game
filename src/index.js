import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GameProvider from './context/GameProvider';

ReactDOM.render(
  <GameProvider>
    <App />
  </GameProvider>,
  document.getElementById('root')
);
