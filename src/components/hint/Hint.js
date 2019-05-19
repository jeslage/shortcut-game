import React from "react";

import { StyledHint, StyledKey } from "./Hint.style.js";

const Hint = ({ shortcut, pressedKeys, level }) => {
  return (
    <StyledHint>
      {shortcut.map(key => (
        <StyledKey
          key={key}
          keyName={key}
          hidden={pressedKeys && !pressedKeys.includes(key)}
          level={level}
        >
          <span>{key}</span>
        </StyledKey>
      ))}
    </StyledHint>
  );
};

export default Hint;
