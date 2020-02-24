import React, { useState, useContext, useRef } from "react";
import { SettingsContext } from "../../context/SettingsProvider";
import { TimerContext } from "../../context/TimerProvider";

import StyledSettings from "./Settings.style";
import MistakeIcon from "../../icons/mistake";
import Countdown from "../countdown/Countdown";
import RadioButtons from "../radioButtons/RadioButtons";
import TopLine from "../topLine/TopLine";
import Button from "../button/Button";

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

  return (
    <StyledSettings>
      <form>
        <TopLine label="Settings" />
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
          disabled={countdown}
          className="settings__radio"
          options={registeredApps}
          value={selectedApp}
          name="selectedApp"
          onChange={val => handleStateChange("selectedApp", val)}
        />

        <h3>System</h3>
        <RadioButtons
          disabled={countdown}
          className="settings__radio"
          options={registeredSystems}
          value={selectedSystem}
          name="selectedSystem"
          onChange={val => handleStateChange("selectedSystem", val)}
        />

        <h3>Mode</h3>
        <RadioButtons
          disabled={countdown}
          className="settings__radio"
          options={registeredModes}
          value={selectedMode}
          name="selectedMode"
          onChange={val => handleStateChange("selectedMode", val)}
        />

        <h3>Level</h3>
        <RadioButtons
          disabled={countdown}
          className="settings__radio"
          options={registeredLevels}
          value={selectedLevel}
          name="selectedLevel"
          onChange={val => handleStateChange("selectedLevel", val)}
        />

        <p className="settings__count">
          <strong>5</strong> out of
          <strong>
            {
              registeredApps
                .filter(app => app.id === selectedApp)[0]
                .shortcuts.filter(item => item.level <= selectedLevel).length
            }
          </strong>
          shortcuts will be tested
        </p>
        <Button
          type="button"
          onClick={startCountdown}
          onKeyDown={e => (e.key === "Enter" ? startCountdown(e) : "")}
          disabled={countdown}
        >
          {countdown ? <Countdown onEnd={() => startGame()} /> : "Start Test"}
        </Button>
      </form>
    </StyledSettings>
  );
};

export default Settings;
