import React, { useContext } from 'react';
import isEqual from 'lodash.isequal';

import {
  SettingsContext,
  getRandomShortcut
} from '../../context/SettingsProvider';

import { useWindowEvent } from '../../utils/hooks';
import getKeyName from '../../utils/getKeyName';

import Hint from '../hint/Hint';

import StyledShortcuts from './Shortcuts.style.js';

const Shortcuts = ({ addShortcutTime, stopTimer, resetTimer }) => {
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

    // Escape for quitting game
    if (key === 'Escape') {
      stopTimer();
      resetTimer();
      setRound(0);
      setView(1);
    }

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
    <StyledShortcuts>
      <h2>{currentShortcut.description}</h2>
      <div className="Shortcuts__hint">
        <Hint shortcut={currentShortcut.shortcut} hidden />
      </div>
    </StyledShortcuts>
  );
};

export default React.memo(Shortcuts);
