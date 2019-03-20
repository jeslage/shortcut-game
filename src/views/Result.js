import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerProvider';
import timeFormat from '../utils/timeFormat';

const Result = () => {
  const { time } = useContext(TimerContext);

  return (
    <>
      <p>Go ahead, {timeFormat(time)}</p>
    </>
  );
};

export default Result;
