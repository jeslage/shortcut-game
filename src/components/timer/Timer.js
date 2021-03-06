import React, { useContext } from "react";

import timeFormat from "../../utils/timeFormat";
import { TimerContext } from "../../context/TimerProvider";
import StyledTimer from "./Timer.style.js";

const Timer = () => {
  const { time } = useContext(TimerContext);
  return (
    <StyledTimer>
      <h3>{timeFormat(time)}</h3>
    </StyledTimer>
  );
};

export default Timer;
