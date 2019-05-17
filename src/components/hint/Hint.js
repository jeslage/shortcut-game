import React from "react";

import { StyledHint, StyledKey } from "./Hint.style.js";

const Hint = ({ shortcut, pressedKeys, hidden }) => {
  console.log(pressedKeys);
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
