import React, { useContext } from "react";

import Start from "./views/Start";
import Game from "./views/Game";
import Result from "./views/Result";

import { SettingsContext } from "./context/SettingsProvider";
import Countdown from "./components/countdown/Countdown";

const App = () => {
  const { view } = useContext(SettingsContext);
  return (
    <div className="App">
      {view === 1 && <Start />}
      {view === 2 && <Countdown />}
      {view === 3 && <Game />}
      {view === 4 && <Result />}
    </div>
  );
};

export default App;
