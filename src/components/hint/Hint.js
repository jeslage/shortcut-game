import React, { useContext } from 'react';

import { SettingsContext } from '../../context/SettingsProvider';
import { StyledHint, StyledKey } from './Hint.style.js';

const Hint = () => {
  const { currentShortcut } = useContext(SettingsContext);
  const { shortcut } = currentShortcut;
  return (
    <StyledHint>
      {shortcut.map(key => (
        <StyledKey key={key} keyName={key}>
          <span>{key}</span>
        </StyledKey>
      ))}
    </StyledHint>
  );
};

export default Hint;
