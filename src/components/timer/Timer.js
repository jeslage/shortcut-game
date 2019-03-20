import React, { useContext } from 'react';

import timeFormat from '../../utils/timeFormat';
import { TimerContext } from '../../context/TimerProvider';
import './Timer.css';

const Timer = () => {
  const { time } = useContext(TimerContext);
  return <h2 className="Timer">{timeFormat(time)}</h2>;
};

export default Timer;
