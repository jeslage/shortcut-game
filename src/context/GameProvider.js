import React from 'react';
import TimerProvider from './TimerProvider';
import SettingsProvider from './SettingsProvider';

const GameProvider = ({ children }) => (
  <SettingsProvider>
    <TimerProvider>{children}</TimerProvider>
  </SettingsProvider>
);

export default GameProvider;
