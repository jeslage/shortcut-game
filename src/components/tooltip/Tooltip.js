import React, { useState, useRef } from 'react';
import throttle from 'lodash.throttle';

import { useWindowEvent } from '../../utils/hooks';

import StyledToolTip from './Tooltip.style.js';

const ToolTip = ({ description }) => {
  const contentRef = useRef(null);
  const triggerRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState('top');

  const handleScroll = () => {
    const { top } = triggerRef.current.getBoundingClientRect();
    const { height } = contentRef.current.getBoundingClientRect();

    if (height >= top - 20) {
      setPosition('bottom');
    } else {
      setPosition('top');
    }
  };

  useWindowEvent('scroll', throttle(handleScroll, 400));

  return (
    <StyledToolTip visible={visible} position={position}>
      <div
        ref={triggerRef}
        className="tooltip__trigger"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <span>?</span>
      </div>

      <div
        className="tooltip__content"
        ref={contentRef}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </StyledToolTip>
  );
};

export default ToolTip;
