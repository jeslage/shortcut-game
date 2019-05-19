import React from "react";
import PropTypes from "prop-types";

import "./Controls.css";

const Controls = ({
  isRunning,
  startTimer,
  stopTimer,
  resetTimer,
  addShortcutTime
}) => (
  <div className="Controls">
    {!isRunning ? (
      <button onClick={() => startTimer()} className="Controls__button">
        Start
      </button>
    ) : null}

    {isRunning ? (
      <button onClick={() => stopTimer()} className="Controls__button">
        Stop
      </button>
    ) : null}

    <button
      onClick={() => resetTimer()}
      disabled={isRunning}
      className="Controls__button"
    >
      Reset
    </button>

    <button
      onClick={() => addShortcutTime()}
      disabled={!isRunning}
      className="Controls__button"
    >
      Lap Time
    </button>
  </div>
);

Controls.propTypes = {
  isRunning: PropTypes.bool,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  addShortcutTime: PropTypes.func.isRequired
};

Controls.defaultProps = {
  isRunning: false
};

export default Controls;
