import React, { useState, useEffect } from "react";

const Countdown = ({ onEnd }) => {
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [time, setTime] = useState({
    seconds: 3
  });

  const updateCountdown = () => {
    if (paused || over) return;

    if (time.seconds === 0) {
      setOver(true);
      onEnd();
    } else {
      setTime({
        seconds: time.seconds - 1
      });
    }
  };

  const resetCountdown = () => {
    setTime({
      seconds: 3
    });
    setPaused(false);
    setOver(false);
  };

  useEffect(() => {
    let timerID = setInterval(() => updateCountdown(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <>
      {time.seconds === 0 && <span>Good Luck!</span>}
      {time.seconds === 1 && <span>1</span>}
      {time.seconds === 2 && <span>2</span>}
      {time.seconds === 3 && <span>3</span>}
    </>
  );
};

export default Countdown;
