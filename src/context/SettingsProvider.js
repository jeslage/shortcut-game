import React, { useState } from "react";
import uuidv4 from "uuid/v4";

import config from "../config/index";

export const SettingsContext = React.createContext();

export const getRandomShortcut = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const removeFromShortcuts = (arr, shortcut) => {
  return arr.filter(el => el !== shortcut);
};

const SettingsProvider = ({ children }) => {
  const { applications, shortcuts, systems } = config;

  const [view, setView] = useState(1);
  const [player, setPlayer] = useState();
  const [round, setRound] = useState(0);
  const playerId = uuidv4();

  const [selectedApp, setSelectedApp] = useState(applications[0]);

  const [currentShortcut, setCurrentShortcut] = useState();
  const [availableShortcuts, setAvailableShortcuts] = useState();

  const removeFromAvailableShortcuts = (arr, shortcut) => {
    setAvailableShortcuts(removeFromShortcuts(arr, shortcut));
  };

  const setShortcuts = () => {
    const firstShortcut = getRandomShortcut(shortcuts[selectedApp]);

    setCurrentShortcut(firstShortcut);
    setAvailableShortcuts(
      removeFromShortcuts(shortcuts[selectedApp], firstShortcut)
    );
  };

  const updateSelectedApp = app => {
    setSelectedApp(app);
    setShortcuts();
  };

  return (
    <SettingsContext.Provider
      value={{
        registeredApps: applications,
        currentShortcut,
        setCurrentShortcut,
        setShortcuts,
        availableShortcuts,
        removeFromAvailableShortcuts,
        view,
        selectedApp,
        systems,
        player,
        playerId,
        round,
        setRound,
        setPlayer,
        setView,
        updateSelectedApp
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsProvider;
