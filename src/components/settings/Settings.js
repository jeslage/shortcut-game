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
    registeredLevels,
    registeredApps,
    setView,
    selectedLevel,
    setSelectedLevel,
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

  return (
    <StyledSettings>
      <form>
        <h3>Player</h3>

        <div role="group" className="settings__wrapper">
          <label htmlFor="player">
            <input
              type="text"
              name="player"
              ref={input}
              value={player ? player : ""}
              onChange={e => setPlayer(e.target.value)}
              required
            />
          </label>
        </div>

        <h3>Application</h3>

        <div role="group" className="settings__wrapper">
          {registeredApps.map(app => (
            <div className="settings__entry">
              <label htmlFor={app} key={app}>
                <input
                  type="radio"
                  id={app}
                  name="app"
                  value={app}
                  defaultChecked={app === selectedApp}
                  onChange={e => updateSelectedApp(e.target.value)}
                />
                <h4>{app}</h4>
              </label>
            </div>
          ))}
        </div>

        <h3>System</h3>

        <div role="group" className="settings__wrapper">
          {systems.map(system => (
            <div className="settings__entry">
              <label htmlFor={system.name} key={system.name}>
                <input
                  type="radio"
                  id={system.name}
                  name="system"
                  value={system.name}
                  defaultChecked={system.checked}
                  disabled={system.disabled}
                />
                <h4>{system.name}</h4>
              </label>
            </div>
          ))}
        </div>

        <h3>Level</h3>

        <div role="group" className="settings__wrapper">
          {registeredLevels.map(level => (
            <div className="settings__entry" key={level.name}>
              <label htmlFor={level.name} key={level.name}>
                <input
                  type="radio"
                  id={level.name}
                  name="level"
                  value={level.name}
                  defaultChecked={level.name === selectedLevel}
                  disabled={level.disabled}
                  onChange={e => setSelectedLevel(e.target.value)}
                />
                <h4>{level.name}</h4>
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
