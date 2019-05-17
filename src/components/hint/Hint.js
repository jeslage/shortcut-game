import React, { useEffect } from 'react';

import { StyledHint, StyledKey } from './Hint.style.js';

const Hint = ({ shortcut, pressedKeys, hidden }) => {
  let keys = [];
  useEffect(() => {
    keys = pressedKeys;
    console.log(keys);
  });
  return (
    <StyledHint>
      {shortcut.map(key => (
        <StyledKey key={key} keyName={key} hidden={hidden}>
          <span>{key}</span>
        </StyledKey>
      ))}
    </StyledHint>
  );
};

export default Hint;
