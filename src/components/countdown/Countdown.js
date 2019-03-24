import React, { useState, useEffect } from 'react';

const Countdown = ({ seconds = 0 }) => {
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [time, setTime] = useState({
    seconds
  });

  const countdown = () => {
    if (paused || over) return;
    if (time.seconds === 1) {
      setOver(true);
    } else {
      setTime({
        seconds: time.seconds - 1
      });
    }
  };

  const reset = () => {
    setTime({
      seconds
    });
    setPaused(false);
    setOver(false);
  };

  useEffect(() => {
    let timerID = setInterval(() => countdown(), 1000);
    return () => clearInterval(timerID);
  });

  return <div>{over ? 'Go!' : time.seconds}</div>;
};

export default Countdown;
