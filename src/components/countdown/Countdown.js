import React, { useState, useEffect, useContext } from "react";
import { SettingsContext } from "../../context/SettingsProvider";
import { TimerContext } from "../../context/TimerProvider";

const Countdown = () => {
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [time, setTime] = useState({
    seconds: 3
  });

  const { setView } = useContext(SettingsContext);
  const { startTimer } = useContext(TimerContext);

  const updateCountdown = () => {
    if (paused || over) return;

    if (time.seconds === 0) {
      setOver(true);
      setView(2);
      startTimer();
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
