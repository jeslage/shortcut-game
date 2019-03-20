import React, { useContext } from 'react';

import Start from './views/Start';
import Game from './views/Game';
import Result from './views/Result';

import { SettingsContext } from './context/SettingsProvider';

const App = () => {
  const { view } = useContext(SettingsContext);
  return (
    <div className="App">
      {view === 1 && <Start />}
      {view === 2 && <Game />}
      {view === 3 && <Result />}
    </div>
  );
};

export default App;
