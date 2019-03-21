import React, { useContext, useRef } from 'react';
import { SettingsContext } from '../context/SettingsProvider';
import { TimerContext } from '../context/TimerProvider';
import { ResultContext } from '../context/ResultProvider';

const Start = () => {
  const {
    setPlayer,
    setSelectedApp,
    selectedApp,
    registeredApps,
    setView
  } = useContext(SettingsContext);
  const { startTimer } = useContext(TimerContext);
  const input = useRef();

  const startGame = () => {
    setPlayer(input.current.value);
    setView(2);
    startTimer();
  };

  return (
    <>
      <form>
        <p>{selectedApp}</p>
        <label>Whats your name</label>
        <input type="text" placeholder="Name" name="player" ref={input} />
        <select onChange={e => setSelectedApp(e.target.value)}>
          {registeredApps.map(app => (
            <option value={app} key={app}>
              {app}
            </option>
          ))}
        </select>
        <input type="radio" name="fruit" value="apple" />
        Apple
        <input type="radio" name="fruit" value="orange" />
        Orange
        <input type="radio" name="fruit" value="watermelon" />
        Watermelon
        <button
          type="button"
          onClick={startGame}
          onKeyDown={e => (e.key === 'Enter' ? startGame(e) : '')}
        >
          Start
        </button>
      </form>
    </>
  );
};

export default Start;
