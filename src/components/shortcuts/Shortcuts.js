import React, { useContext, useState } from "react";

import {
  SettingsContext,
  getRandomShortcut,
  removeFromShortcuts
} from "../../context/SettingsProvider";

import { useDocumentEvent } from "../../utils/hooks";
import getKeyName from "../../utils/getKeyName";

import Hint from "../hint/Hint";

import StyledShortcuts from "./Shortcuts.style.js";

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

  useDocumentEvent("keydown", e => handleKeyDown(e));
  useDocumentEvent("keyup", e => handleKeyUp(e));

  // Make empty array for pressed keys to compare arrays
  const [pressedKeys, setPressedKeys] = useState([]);

  const compareArrays = (firstArray, secondArray) => {
    let includedValues = 0;

    firstArray.forEach(string => {
      if (secondArray.includes(string)) includedValues++;
    });

    if (
      includedValues === secondArray.length &&
      firstArray.length === secondArray.length
    ) {
      return true;
    }

    return false;
  };

  const handleKeyDown = e => {
    e.preventDefault();

    const key = getKeyName(e.key);

    // Escape for quitting game
    if (key === "Escape") {
      stopTimer();
      resetTimer();
      resetSettings();
      return;
    }

    // Workaround for async set state
    let updatedKeys = pressedKeys;

    // Check if key is already in state array, if not add it
    if (!pressedKeys.includes(key)) {
      setPressedKeys(pressedKeys => [...pressedKeys, key]);
      updatedKeys = [...pressedKeys, key];
    }

    // Check if pressed keys are equal to shortcut
    if (compareArrays(updatedKeys, currentShortcut.shortcut)) {
      // Set minimal timeout to visibly show last key pressed
      setTimeout(() => {
        // Reset pressed keys
        setPressedKeys([]);

        const solvedRound = round + 1;
        setSettings(state => ({
          ...state,
          round: solvedRound
        }));

        addShortcutTime(currentShortcut);

        // Check if all rounds have been played or shortcuts array is empty else update shortcuts
        if (solvedRound === 5 || availableShortcuts.length === 0) {
          stopTimer();

          setSettings(state => ({
            ...state,
            view: state.view + 1
          }));
        } else {
          const newShortcut = getRandomShortcut(availableShortcuts);

          updatedKeys = [];

          setAppShortcuts({
            currentShortcut: newShortcut,
            availableShortcuts: removeFromShortcuts(
              availableShortcuts,
              newShortcut
            )
          });
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
        {selectedLevel !== "3" && (
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
