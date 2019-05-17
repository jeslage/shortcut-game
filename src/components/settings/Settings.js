import React, { useContext, useRef } from "react";
import { SettingsContext } from "../../context/SettingsProvider";

import { VSCode, Sketch } from "../../icons/apps";
import { Windows, Apple } from "../../icons/system";
import StyledSettings from "./Settings.style";

const Settings = () => {
  const {
    setPlayer,
    player,
    updateSelectedApp,
    selectedApp,
    systems,
    registeredApps,
    setView,
    setShortcuts
  } = useContext(SettingsContext);

  const input = useRef();

  const startGame = () => {
    if (input.current.checkValidity()) {
      setPlayer(input.current.value);
      setShortcuts();
      setView(2);
    }
  };

  const renderAppIcon = () => ({
    sketch: <Sketch />,
    vscode: <VSCode />
  });

  const renderSystemIcon = () => ({
    win: <Windows />,
    osx: <Apple />
  });

  return (
    <StyledSettings>
      <form>
        <label htmlFor="player">
          <input
            type="text"
            placeholder="Whats your name..."
            name="player"
            ref={input}
            value={player ? player : ""}
            onChange={e => setPlayer(e.target.value)}
            required
          />
        </label>

        <div role="group" className="settings__apps">
          {registeredApps.map(app => (
            <div className="settings__app">
              <label htmlFor={app} key={app}>
                <input
                  type="radio"
                  id={app}
                  name="app"
                  value={app}
                  defaultChecked={app === selectedApp}
                  onChange={e => updateSelectedApp(e.target.value)}
                />
                <div className="settings__app-icon">{renderAppIcon()[app]}</div>
              </label>
            </div>
          ))}
        </div>

        <div role="group" className="settings__systems">
          {systems.map(system => (
            <div className="settings__system">
              <label htmlFor={system.name} key={system.name}>
                <input
                  type="radio"
                  id={system.name}
                  name="system"
                  value={system.name}
                  defaultChecked={system.checked}
                  disabled={system.disabled}
                />
                <div className="settings__system-icon">
                  {renderSystemIcon()[system.name]}
                </div>
              </label>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={startGame}
          onKeyDown={e => (e.key === "Enter" ? startGame(e) : "")}
        >
          Start
        </button>
      </form>
    </StyledSettings>
  );
};

export default Settings;
