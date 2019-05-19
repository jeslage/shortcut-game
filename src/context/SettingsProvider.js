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

  const [view, setView] = useState(1);
  const [player, setPlayer] = useState();
  const [round, setRound] = useState(0);

  // TODO: Move everything to one settings object
  // const [settings, setSettings] = useState({
  //   round: 0,
  //   view: 1,
  //   player: null,
  //   playerId: uuidv4(),
  //   selectedApp: applications[0],
  //   selectedLevel: levels[0].name
  // });

  // const [appShortcuts, setAppShortcuts] = useState({
  //   currentShortcut: null,
  //   availableShortcuts: null
  // });

  const playerId = uuidv4();

  const [selectedApp, setSelectedApp] = useState(applications[0]);
  const [selectedLevel, setSelectedLevel] = useState(levels[0].name);

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
        registeredLevels: levels,
        currentShortcut,
        setCurrentShortcut,
        setShortcuts,
        availableShortcuts,
        removeFromAvailableShortcuts,
        view,
        selectedApp,
        systems,
        selectedLevel,
        player,
        playerId,
        round,
        setRound,
        setPlayer,
        setSelectedLevel,
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
