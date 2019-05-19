import React, { useContext } from "react";
import { TimerContext } from "../context/TimerProvider";

import Shortcuts from "../components/shortcuts/Shortcuts";

import Timer from "../components/timer/Timer";
import LastSolved from "../components/lastSolved/LastSolved";
import Controls from "../components/controls/Controls";

const Game = () => {
  const {
    timeList,
    startTimer,
    stopTimer,
    resetTimer,
    isRunning,
    addShortcutTime
  } = useContext(TimerContext);

  return (
    <>
      <Timer />
      <Shortcuts
        addShortcutTime={addShortcutTime}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
      <Controls
        stopTimer={stopTimer}
        startTimer={startTimer}
        isRunning={isRunning}
      />
      <LastSolved timeList={timeList} />
    </>
  );
};

export default Game;
