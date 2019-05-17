import React from "react";
import ReactDOM from "react-dom";
import "./config/db/firebase";

import App from "./App";
import GameProvider from "./context/GameProvider";
import GlobalStyle from "./stylesheet/global";

ReactDOM.render(
  <GameProvider>
    <GlobalStyle />
    <App />
  </GameProvider>,
  document.getElementById("root")
);
