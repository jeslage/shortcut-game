import React, { useContext } from 'react';

import timeFormat from '../../utils/timeFormat';
import { TimerContext } from '../../context/TimerProvider';
import StyledTimer from './Timer.style.js';
import { SettingsContext } from '../../context/SettingsProvider';

const Timer = () => {
  const { time } = useContext(TimerContext);
  const { player, round } = useContext(SettingsContext);
  return (
    <StyledTimer>
      <h3 className="shortcuts__player">Player: {player}</h3>
      <h3 className="shortcuts__clock">{timeFormat(time)}</h3>
      <h3 className="shortcuts__round">Runde {round + 1}</h3>
    </StyledTimer>
  );
};

export default Timer;
