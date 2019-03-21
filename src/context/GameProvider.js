import React from 'react';
import TimerProvider from './TimerProvider';
import SettingsProvider from './SettingsProvider';
import ResultProvider from './ResultProvider';

const GameProvider = ({ children }) => (
  <SettingsProvider>
    <TimerProvider>
      <ResultProvider>{children}</ResultProvider>
    </TimerProvider>
  </SettingsProvider>
);

export default GameProvider;
