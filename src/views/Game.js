import React, { useContext } from "react";
import { TimerContext } from "../context/TimerProvider";

import Shortcuts from "../components/shortcuts/Shortcuts";

import Timer from "../components/timer/Timer";
import LastSolved from "../components/lastSolved/LastSolved";

const Game = () => {
  const { timeList, stopTimer, resetTimer, addShortcutTime } = useContext(
    TimerContext
  );

  return (
    <>
      <Timer />

      <Shortcuts
        addShortcutTime={addShortcutTime}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />

      <LastSolved timeList={timeList} />
    </>
  );
};

export default Game;
