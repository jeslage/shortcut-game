import React from "react";

import StyledTopLine from "./TopLine.style.js";

const TopLine = ({ label }) => (
  <StyledTopLine>
    <div className="topLine__icon" />

    <div className="topLine__spacer">
      <i />
      <i />
      <i />
    </div>
    {label && <p>{label}</p>}
  </StyledTopLine>
);

export default TopLine;
