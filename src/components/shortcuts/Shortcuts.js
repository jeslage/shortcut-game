import React, { useContext } from 'react';
import isEqual from 'lodash.isequal';

import {
  SettingsContext,
  getRandomShortcut,
  removeFromShortcuts
} from '../../context/SettingsProvider';
import { useWindowEvent } from '../../utils/hooks';

const Shortcuts = ({ addShortcutTime, stopTimer }) => {
  const {
    currentShortcut,
    setCurrentShortcut,
    setUsedShortcuts,
    usedShortcuts,
    availableShortcuts,
    setAvailableShortcuts,
    setView
  } = useContext(SettingsContext);

  let pressedKeys = [];

  if (usedShortcuts.length === 5) {
    stopTimer();
    setView(prev => prev + 1);
  }

  useWindowEvent('keydown', e => handleKeyDown(e));
  useWindowEvent('keyup', e => handleKeyUp(e));

  const handleKeyDown = e => {
    e.preventDefault();

    if (!pressedKeys.includes(e.key)) {
      pressedKeys.push(e.key);
    }

    if (isEqual(pressedKeys, currentShortcut.shortcut)) {
      const newShortcut = getRandomShortcut(availableShortcuts);

      addShortcutTime(currentShortcut);
      setUsedShortcuts(state => [...state, currentShortcut]);

      setCurrentShortcut(newShortcut);

      setAvailableShortcuts(
        removeFromShortcuts(availableShortcuts, newShortcut)
      );
    }
  };

  const handleClick = () => {
    const newShortcut = getRandomShortcut(availableShortcuts);

    addShortcutTime(currentShortcut);
    setUsedShortcuts(state => [...state, currentShortcut]);

    setCurrentShortcut(newShortcut);

    setAvailableShortcuts(removeFromShortcuts(availableShortcuts, newShortcut));
  };

  const handleKeyUp = e => {
    e.preventDefault();
    pressedKeys = [];
  };

  return (
    <>
      <button onClick={() => handleClick()}>Add</button>
      <h2 className="Shortcuts">{currentShortcut.shortcut}</h2>
    </>
  );
};

export default React.memo(Shortcuts);
