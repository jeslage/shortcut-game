import React, { useState, useRef } from "react";

import throttle from "../../utils/throttle";
import { useWindowEvent } from "../../utils/hooks";

import StyledToolTip from "./Tooltip.style.js";
import TopLine from "../topLine/TopLine";

const ToolTip = ({ description, disabled }) => {
  const contentRef = useRef(null);
  const triggerRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("top");

  const handleVisible = visible => {
    if (disabled) {
      setVisible(false);
      return;
    }

    setVisible(visible);
  };

  const handleScroll = () => {
    const { top } = triggerRef.current.getBoundingClientRect();
    const { height } = contentRef.current.getBoundingClientRect();

    if (height >= top - 20) {
      setPosition("bottom");
    } else {
      setPosition("top");
    }
  };

  useWindowEvent("scroll", throttle(handleScroll, 600));

  return (
    <StyledToolTip visible={visible} position={position}>
      <div
        ref={triggerRef}
        className="tooltip__trigger"
        onMouseEnter={() => handleVisible(true)}
        onMouseLeave={() => handleVisible(false)}
        onTouchStart={() => handleVisible(prev => !prev)}
      >
        <span>?</span>
      </div>
      <div className="tooltip__content-wrapper" ref={contentRef}>
        <TopLine />
        <div
          className="tooltip__content"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </StyledToolTip>
  );
};

export default ToolTip;
