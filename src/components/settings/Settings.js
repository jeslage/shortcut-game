import React, { useState, useContext, useRef } from "react";
import { SettingsContext } from "../../context/SettingsProvider";

import StyledSettings from "./Settings.style";
import CrossIcon from "../../icons/cross";
import MistakeIcon from "../../icons/mistake";
import Countdown from "../countdown/Countdown";

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

  const [mistake, setMistake] = useState(false);
  const [countdown, setCountdown] = useState(false);

  const input = useRef();

  const startGame = () => {
    if (input.current.checkValidity()) {
      setPlayer(input.current.value);
      setShortcuts();
      setCountdown(true);
    } else {
      setMistake(true);
    }
  };

  return (
    <StyledSettings>
      <form>
        <h3>Name</h3>

        <div role="group" className="settings__wrapper">
          <label htmlFor="player">
            <input
              type="text"
              name="player"
              ref={input}
              value={player ? player : ""}
              onFocus={() => (mistake ? setMistake(false) : "")}
              onChange={e => setPlayer(e.target.value)}
              disabled={countdown}
              required
            />
            {mistake && <MistakeIcon />}
          </label>
        </div>

        <h3>App</h3>

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
                  disabled={countdown}
                  onChange={e => updateSelectedApp(e.target.value)}
                />
                <h4>
                  <CrossIcon />
                  <span>{app}</span>
                </h4>
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
                  disabled={system.disabled || countdown}
                />
                <h4>
                  <CrossIcon />
                  <span>{system.name}</span>
                </h4>
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
                  disabled={level.disabled || countdown}
                  onChange={e => setSelectedLevel(e.target.value)}
                />
                <h4>
                  <CrossIcon />
                  <span>{level.name}</span>
                </h4>
              </label>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={startGame}
          onKeyDown={e => (e.key === "Enter" ? startGame(e) : "")}
          disabled={countdown}
        >
          {countdown ? <Countdown /> : "Start Test"}
        </button>
      </form>
    </StyledSettings>
  );
};

export default Settings;
