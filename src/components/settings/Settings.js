import React, { useState, useContext, useRef } from "react";
import { SettingsContext } from "../../context/SettingsProvider";
import { TimerContext } from "../../context/TimerProvider";

import StyledSettings from "./Settings.style";
import CrossIcon from "../../icons/cross";
import MistakeIcon from "../../icons/mistake";
import Countdown from "../countdown/Countdown";
import ToolTip from "../tooltip/Tooltip";

import CircleIcon from "../../icons/circle";

const Settings = () => {
  const { updateShortcuts, setSettings, settings } = useContext(
    SettingsContext
  );
  const { startTimer } = useContext(TimerContext);

  const {
    player,
    registeredApps,
    selectedApp,
    registeredLevels,
    selectedLevel,
    registeredModes,
    selectedMode,
    registeredSystems,
    selectedSystem
  } = settings;

  const [mistake, setMistake] = useState(false);
  const [countdown, setCountdown] = useState(false);

  const input = useRef();

  const handleStateChange = (key, value) => {
    setSettings(state => ({ ...state, [key]: value }));
  };

  const handlePlayerChange = () => {
    if (mistake) setMistake(false);

    handleStateChange("player", input.current.value);
  };

  const startCountdown = () => {
    if (input.current.checkValidity()) {
      handleStateChange("player", input.current.value);

      updateShortcuts();
      setCountdown(true);
    } else {
      setMistake(true);
      input.current.focus();
    }
  };

  const startGame = () => {
    handleStateChange("view", 2);
    startTimer();
  };

  const RadioButtons = ({ entries, selectedEntry, stateKey }) => (
    <div role="group" className="settings__wrapper">
      {entries.map(entry => {
        const id = entry.id || entry.name;
        console.log(entry);
        return (
          <div className="settings__entry" key={id}>
            <label htmlFor={id} key={id}>
              <input
                type="radio"
                id={id}
                name={stateKey}
                value={id}
                defaultChecked={id === selectedEntry}
                disabled={entry.disabled || countdown}
                onChange={e => handleStateChange(stateKey, e.target.value)}
              />
              <h4>
                <CrossIcon />

                <span>{entry.name}</span>

                {entry.description && (
                  <ToolTip
                    description={entry.description}
                    disabled={countdown}
                  />
                )}
              </h4>
            </label>
          </div>
        );
      })}
    </div>
  );

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
              placeholder="Insert name"
              autoComplete="given-name"
              disabled={countdown}
              required
            />
            {mistake && <MistakeIcon />}
          </label>
        </div>

        <h3>App</h3>
        <RadioButtons
          entries={registeredApps}
          selectedEntry={selectedApp}
          stateKey="selectedApp"
          withShortcutsCount
        />

        <h3>System</h3>
        <RadioButtons
          entries={registeredSystems}
          selectedEntry={selectedSystem}
          stateKey="selectedSystem"
        />

        <h3>Mode</h3>
        <RadioButtons
          entries={registeredModes}
          selectedEntry={selectedMode}
          stateKey="selectedMode"
        />

        <h3>Level</h3>
        <RadioButtons
          entries={registeredLevels}
          selectedEntry={selectedLevel}
          stateKey="selectedLevel"
        />
        <p className="settings__count">
          5 out of
          <span>
            {
              registeredApps
                .filter(app => app.id === selectedApp)[0]
                .shortcuts.filter(item => item.level <= selectedLevel).length
            }
            <CircleIcon />
          </span>
          shortcuts will be tested
        </p>
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
