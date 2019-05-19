import React, { useState, useContext, useRef } from "react";
import { SettingsContext } from "../../context/SettingsProvider";
import { TimerContext } from "../../context/TimerProvider";

import StyledSettings from "./Settings.style";
import CrossIcon from "../../icons/cross";
import MistakeIcon from "../../icons/mistake";
import Countdown from "../countdown/Countdown";

const Settings = () => {
  const { updateShortcuts, setSettings, settings } = useContext(
    SettingsContext
  );
  const { startTimer } = useContext(TimerContext);

  const {
    player,
    selectedApp,
    registeredApps,
    registeredLevels,
    selectedLevel,
    registeredSystems
  } = settings;

  const [mistake, setMistake] = useState(false);
  const [countdown, setCountdown] = useState(false);

  const input = useRef();

  const handlePlayerChange = () => {
    if (mistake) setMistake(false);

    setSettings(state => ({
      ...state,
      player: input.current.value
    }));
  };

  const handleLevelChange = level => {
    setSettings(state => ({ ...state, selectedLevel: level }));
  };

  const handleAppChange = app => {
    setSettings(state => ({ ...state, selectedApp: app }));
  };

  const startCountdown = () => {
    if (input.current.checkValidity()) {
      setSettings(state => ({
        ...state,
        player: input.current.value
      }));

      updateShortcuts();
      setCountdown(true);
    } else {
      setMistake(true);
      input.current.focus();
    }
  };

  const startGame = () => {
    setSettings(state => ({
      ...state,
      view: 2
    }));

    startTimer();
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
              onChange={() => handlePlayerChange()}
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
              <label htmlFor={app.id} key={app.id}>
                <input
                  type="radio"
                  id={app.id}
                  name="app"
                  value={app.id}
                  defaultChecked={app.id === selectedApp}
                  disabled={countdown}
                  onChange={e => handleAppChange(e.target.value)}
                />
                <h4>
                  <CrossIcon />
                  <span>{app.name}</span>
                </h4>
              </label>
            </div>
          ))}
        </div>

        <h3>System</h3>

        <div role="group" className="settings__wrapper">
          {registeredSystems.map(system => (
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
                  onChange={e => handleLevelChange(e.target.value)}
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
          onClick={startCountdown}
          onKeyDown={e => (e.key === "Enter" ? startCountdown(e) : "")}
          disabled={countdown}
        >
          {countdown ? <Countdown onEnd={() => startGame()} /> : "Start Test"}
        </button>
      </form>
    </StyledSettings>
  );
};

export default Settings;
