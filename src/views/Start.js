import React, { useContext, useRef } from 'react';
import { SettingsContext } from '../context/SettingsProvider';
import { TimerContext } from '../context/TimerProvider';
import Countdown from '../components/countdown/Countdown';

const Start = () => {
  const {
    setPlayer,
    player,
    updateSelectedApp,
    systems,
    registeredApps,
    setView
  } = useContext(SettingsContext);

  const { startTimer } = useContext(TimerContext);

  const input = useRef();

  const startGame = () => {
    if (input.current.checkValidity()) {
      setPlayer(input.current.value);
      setView(2);
      startTimer();
    }
  };

  return (
    <form>
      <Countdown seconds={3} />,
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
      <select onChange={e => updateSelectedApp(e.target.value)}>
        {registeredApps.map(app => (
          <option value={app} key={app}>
            {app}
          </option>
        ))}
      </select>
      <fieldset>
        {systems.map(system => (
          <label htmlFor={system.name} key={system.name}>
            <input
              type="radio"
              id={system.name}
              name="system"
              value={system.name}
              defaultChecked={system.checked}
              disabled={system.disabled}
            />
            {system.name}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <label htmlFor="levelOne">
          <input
            type="radio"
            id="levelOne"
            name="level"
            value="1"
            defaultChecked
          />
          Anfänger
        </label>
        <label htmlFor="levelTwo">
          <input type="radio" id="levelTwo" name="level" value="2" disabled />
          Profi
        </label>
        <label htmlFor="levelThree">
          <input type="radio" id="levelThree" name="level" value="3" disabled />
          Master
        </label>
      </fieldset>
      <button
        type="button"
        onClick={startGame}
        onKeyDown={e => (e.key === 'Enter' ? startGame(e) : '')}
      >
        Start
      </button>
    </form>
  );
};

export default Start;
