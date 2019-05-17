import React, { useContext, useRef } from 'react';
import { SettingsContext } from '../../context/SettingsProvider';

import { VSCode, Sketch } from '../../icons/apps';
import { Windows, Apple } from '../../icons/system';
import StyledSettings from './Settings.style';

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
          Whats your name
          <input
            type="text"
            placeholder="Name"
            name="player"
            ref={input}
            value={player ? player : ''}
            onChange={e => setPlayer(e.target.value)}
            required
          />
        </label>
        <fieldset className="settings__apps">
          {registeredApps.map((app, index) => (
            <div className="settings__app">
              <input
                type="radio"
                id={app}
                name="app"
                value={app}
                defaultChecked={app === selectedApp}
                onChange={e => updateSelectedApp(e.target.value)}
              />
              <label htmlFor={app} key={app}>
                {renderAppIcon()[app]}
              </label>
            </div>
          ))}
        </fieldset>
        <fieldset className="settings__systems">
          {systems.map(system => (
            <div className="settings__system">
              <input
                type="radio"
                id={system.name}
                name="system"
                value={system.name}
                defaultChecked={system.checked}
                disabled={system.disabled}
              />
              <label htmlFor={system.name} key={system.name}>
                {renderSystemIcon()[system.name]}
              </label>
            </div>
          ))}
        </fieldset>
        <fieldset className="settings__levels">
          <div className="settings__level">
            <input
              type="radio"
              id="levelOne"
              name="level"
              value="1"
              defaultChecked
            />
            <label htmlFor="levelOne">Anfänger</label>
          </div>

          <div className="settings__level">
            <input type="radio" id="levelTwo" name="level" value="2" disabled />
            <label htmlFor="levelTwo">Profi</label>
          </div>

          <div className="settings__level">
            <input
              type="radio"
              id="levelThree"
              name="level"
              value="3"
              disabled
            />
            <label htmlFor="levelThree">Master</label>
          </div>
        </fieldset>
        <button
          type="button"
          onClick={startGame}
          onKeyDown={e => (e.key === 'Enter' ? startGame(e) : '')}
        >
          Start
        </button>
      </form>
    </StyledSettings>
  );
};

export default Settings;
