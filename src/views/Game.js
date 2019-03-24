import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerProvider';

import Shortcuts from '../components/shortcuts/Shortcuts';
import TimeList from '../components/timeList/TimeList';
import Timer from '../components/timer/Timer';

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

      <TimeList timeList={timeList} />
    </>
  );
};

export default Game;
