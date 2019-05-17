import React, { useState, useEffect, useContext } from "react";
import { SettingsContext } from "../../context/SettingsProvider";
import { TimerContext } from "../../context/TimerProvider";
import StyledCountdown from "./Countdown.style";

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
      setView(3);
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
    <StyledCountdown>
      {time.seconds === 0 && <h2>Go!</h2>}
      {time.seconds === 1 && <h2>1</h2>}
      {time.seconds === 2 && <h2>2</h2>}
      {time.seconds === 3 && <h2>3</h2>}
    </StyledCountdown>
  );
};

export default Countdown;
