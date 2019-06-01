import React, { useContext, useState } from 'react';
import isEqual from 'lodash.isequal';

import {
  SettingsContext,
  getRandomShortcut,
  removeFromShortcuts
} from '../../context/SettingsProvider';

import { useWindowEvent } from '../../utils/hooks';
import getKeyName from '../../utils/getKeyName';

import Hint from '../hint/Hint';

import StyledShortcuts from './Shortcuts.style.js';

const Shortcuts = ({ addShortcutTime, stopTimer, resetTimer }) => {
  const {
    appShortcuts,
    setAppShortcuts,
    settings,
    setSettings,
    resetSettings
  } = useContext(SettingsContext);
  const { selectedLevel, round } = settings;
  const { currentShortcut, availableShortcuts } = appShortcuts;

  useWindowEvent('keydown', e => handleKeyDown(e));
  useWindowEvent('keyup', e => handleKeyUp(e));

  // Make empty array for pressed keys to compare arrays
  const [pressedKeys, setPressedKeys] = useState([]);

  const handleKeyDown = e => {
    e.preventDefault();

    const key = getKeyName(e.key);

    // Escape for quitting game
    if (key === 'Escape') {
      stopTimer();
      resetTimer();
      resetSettings();
    }

    // Workaround for async set state
    let updatedKeys = pressedKeys;

    // Check if key is already in state array, if not add it
    if (!pressedKeys.includes(key)) {
      setPressedKeys(pressedKeys => [...pressedKeys, key]);
      updatedKeys = [...pressedKeys, key];
    }

    // Check if pressed keys are equal to shortcut
    if (isEqual(updatedKeys, currentShortcut.shortcut)) {
      // Set minimal timeout to visibly show last key pressed
      setTimeout(() => {
        const newShortcut = getRandomShortcut(availableShortcuts);
        const solvedRound = round + 1;

        setSettings(state => ({
          ...state,
          round: state.round + 1
        }));

        addShortcutTime(currentShortcut);

        setAppShortcuts({
          currentShortcut: newShortcut,
          availableShortcuts: removeFromShortcuts(
            availableShortcuts,
            newShortcut
          )
        });

        if (solvedRound === 5) {
          stopTimer();

          setSettings(state => ({
            ...state,
            view: state.view + 1
          }));
        }
      }, 10);
    }
  };

  const handleKeyUp = e => {
    e.preventDefault();
    setPressedKeys([]);
  };

  return (
    <StyledShortcuts>
      <h2>{currentShortcut.description}</h2>
      <div className="Shortcuts__hint">
        {selectedLevel !== 'senior' && (
          <Hint
            shortcut={currentShortcut.shortcut}
            pressedKeys={pressedKeys}
            level={selectedLevel}
            hidden
          />
        )}
      </div>
    </StyledShortcuts>
  );
};

export default React.memo(Shortcuts);
