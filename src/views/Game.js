import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerProvider';
import { SettingsContext } from '../context/SettingsProvider';

import Controls from '../components/controls/Controls';
import Shortcuts from '../components/shortcuts/Shortcuts';
import TimeList from '../components/timeList/TimeList';
import Timer from '../components/timer/Timer';

const Game = () => {
  const {
    isRunning,
    timeList,
    startTimer,
    stopTimer,
    resetTimer,
    addShortcutTime
  } = useContext(TimerContext);

  const { player } = useContext(SettingsContext);

  return (
    <>
      <p>Go ahead, {player}</p>
      <Timer />
      <Shortcuts addShortcutTime={addShortcutTime} stopTimer={stopTimer} />
      <Controls
        isRunning={isRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        addShortcutTime={addShortcutTime}
      />
      <TimeList timeList={timeList} />
    </>
  );
};

export default Game;
