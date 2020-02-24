import React, { useContext, useEffect, useState } from "react";

import Start from "./views/Start";
import Game from "./views/Game";
import Result from "./views/Result";

import { SettingsContext } from "./context/SettingsProvider";
import { useWindowEvent } from "./utils/hooks";
import isTouchDevice from "./utils/isTouchDevice";

const App = () => {
  const { settings } = useContext(SettingsContext);
  const { view } = settings;

  const [touchDevice, setTouchDevice] = useState(false);

  const touchDeviceCheck = () => {
    if (isTouchDevice()) {
      setTouchDevice(true);
    } else {
      setTouchDevice(false);
    }
  };

  useEffect(() => {
    touchDeviceCheck();
  }, []);

  useWindowEvent("resize", () => touchDeviceCheck());

  return (
    <div className="App">
      {touchDevice ? (
        <h2>This game is not for touch devices.</h2>
      ) : (
        <>
          {view === 1 && <Start />}
          {view === 2 && <Game />}
          {view === 3 && <Result />}
        </>
      )}
    </div>
  );
};

export default App;
