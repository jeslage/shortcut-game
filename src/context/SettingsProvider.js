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
  const { applications, shortcuts, systems, levels } = config;

  const [settings, setSettings] = useState({
    round: 0,
    view: 1,
    player: null,
    playerId: uuidv4(),
    registeredSystems: systems,
    registeredApps: applications,
    selectedApp: applications[0].id,
    registeredLevels: levels,
    selectedLevel: levels[0].name
  });

  const [appShortcuts, setAppShortcuts] = useState({
    currentShortcut: null,
    availableShortcuts: null
  });

  const updateShortcuts = () => {
    const { selectedApp } = settings;
    const firstShortcut = getRandomShortcut(shortcuts[selectedApp]);

    setAppShortcuts({
      currentShortcut: firstShortcut,
      availableShortcuts: removeFromShortcuts(
        shortcuts[selectedApp],
        firstShortcut
      )
    });
  };

  const resetSettings = () => {
    setSettings(state => ({
      ...state,
      playerId: uuidv4,
      round: 0,
      view: 1
    }));
  };

  return (
    <SettingsContext.Provider
      value={{
        setSettings,
        resetSettings,
        settings,
        updateShortcuts,
        appShortcuts,
        setAppShortcuts
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsProvider;
