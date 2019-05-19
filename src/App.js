import React, { useContext, useEffect, useState } from "react";

import Start from "./views/Start";
import Game from "./views/Game";
import Result from "./views/Result";

import { SettingsContext } from "./context/SettingsProvider";
import { useWindowEvent } from "./utils/hooks";

const App = () => {
  const { settings } = useContext(SettingsContext);
  const { view } = settings;

  const [isMobile, setIsMobile] = useState(false);

  const checkViewportSize = () => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    } else if (isMobile === true) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkViewportSize();
  }, []);

  useWindowEvent("resize", () => checkViewportSize());
  return (
    <div className="App">
      {isMobile ? (
        <h2>
          You need a bigger screen and a keyboard to play this game! Sorry...
        </h2>
      ) : (
        <>
          {view === 2 && <Game />}
          {view === 3 && <Result />}
          {view === 1 && <Start />}
        </>
      )}
    </div>
  );
};

export default App;
