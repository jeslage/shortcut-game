import React, { useState } from 'react';

import config from '../config/index';

export const SettingsContext = React.createContext();

export const getRandomShortcut = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const removeFromShortcuts = (arr, shortcut) => {
  return arr.filter(el => el !== shortcut);
};

const SettingsProvider = ({ children }) => {
  const { applications, shortcuts } = config;

  const [view, setView] = useState(1);
  const [player, setPlayer] = useState('');
  const [round, setRound] = useState(0);

  const [selectedApp, setSelectedApp] = useState(applications[0]);

  const firstShortcut = getRandomShortcut(shortcuts[selectedApp]);

  const [currentShortcut, setCurrentShortcut] = useState(firstShortcut);
  const [availableShortcuts, setAvailableShortcuts] = useState(
    removeFromShortcuts(shortcuts[selectedApp], firstShortcut)
  );

  const removeFromAvailableShortcuts = (arr, shortcut) => {
    setAvailableShortcuts(removeFromShortcuts(arr, shortcut));
  };

  const updateSelectedApp = app => {
    setSelectedApp(app);

    const firstShortcut = getRandomShortcut(shortcuts[app]);
    setCurrentShortcut(firstShortcut);
    setAvailableShortcuts(removeFromShortcuts(shortcuts[app], firstShortcut));
  };
  return (
    <SettingsContext.Provider
      value={{
        registeredApps: applications,
        currentShortcut,
        setCurrentShortcut,
        availableShortcuts,
        removeFromAvailableShortcuts,
        view,
        selectedApp,
        player,
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
