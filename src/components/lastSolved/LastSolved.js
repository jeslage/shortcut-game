import React from 'react';

import timeFormat from '../../utils/timeFormat';

import Hint from '../hint/Hint';
import StyledLastSolved from './LastSolved.style';

const LastSolved = ({ timeList }) => {
  const lastSolvedShortcut = timeList[timeList.length - 1];

  return (
    <StyledLastSolved>
      <h3>Last solved</h3>
      {lastSolvedShortcut && (
        <div className="LastSolved__container">
          <div className="LastSolved__shortcut">
            <Hint shortcut={lastSolvedShortcut.shortcut} />
          </div>
          <h3 className="LastSolved__description">
            {lastSolvedShortcut.description}
          </h3>
          <h3 className="LastSolved__time">
            {timeFormat(lastSolvedShortcut.timePassed)}
          </h3>
          <h3 className="LastSolved__prevTime">
            {timeFormat(lastSolvedShortcut.difference)}
          </h3>
        </div>
      )}
    </StyledLastSolved>
  );
};

export default React.memo(LastSolved);
