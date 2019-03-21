import React, { useContext } from 'react';
import isEqual from 'lodash.isequal';

import {
  SettingsContext,
  getRandomShortcut
} from '../../context/SettingsProvider';
import { useWindowEvent } from '../../utils/hooks';
import getKeyName from '../../utils/getKeyName';

const Shortcuts = ({ addShortcutTime, stopTimer }) => {
  const {
    currentShortcut,
    setCurrentShortcut,
    availableShortcuts,
    removeFromAvailableShortcuts,
    setView,
    setRound,
    round
  } = useContext(SettingsContext);

  useWindowEvent('keydown', e => handleKeyDown(e));
  useWindowEvent('keyup', e => handleKeyUp(e));

  // Make empty array for pressed keys to compare arrays
  let pressedKeys = [];

  const handleKeyDown = e => {
    e.preventDefault();

    const key = getKeyName(e.key);

    // Check if key is already in array, if not add it
    if (!pressedKeys.includes(key)) {
      pressedKeys.push(key);
    }

    // Check if pressed keys are equal to shortcut
    if (isEqual(pressedKeys, currentShortcut.shortcut)) {
      const newShortcut = getRandomShortcut(availableShortcuts);
      const solvedRound = round + 1;

      setRound(solvedRound);
      addShortcutTime(currentShortcut);
      setCurrentShortcut(newShortcut);

      removeFromAvailableShortcuts(availableShortcuts, newShortcut);

      if (solvedRound === 5) {
        stopTimer();
        setView(prev => prev + 1);
      }
    }
  };

  const handleKeyUp = e => {
    e.preventDefault();
    pressedKeys = [];
  };

  return (
    <>
      <h2 className="Shortcuts">{currentShortcut.shortcut}</h2>
    </>
  );
};

export default React.memo(Shortcuts);
