import React from 'react';
import PropTypes from 'prop-types';

import timeFormat from '../../utils/timeFormat';

import './TimeList.css';

const Time = ({ number, time, shortcut, prevTime }) => (
  <div className="Time">
    <span className="Time__number">{number}</span>
    <span className="Time__shortcut">{shortcut.description}</span>
    <span className="Time__time">{timeFormat(time)}</span>

    <span className="Time__prevTime">
      {prevTime ? timeFormat(time - prevTime) : timeFormat(time)}
    </span>
  </div>
);

const TimeList = ({ timeList }) => (
  <div className="TimeList">
    <div className="TimeList__listwrap">
      <div className="TimeList__headers">
        <span>Nummer</span>
        <span>Shortcut</span>
        <span>Gesamtzeit</span>
        <span>Einzelzeit</span>
      </div>

      <ul className="TimeList__list">
        {timeList.map((entry, index) => {
          return (
            <li key={index}>
              <Time
                number={index + 1}
                time={entry.time}
                shortcut={entry.shortcut}
                prevTime={index > 0 ? timeList[index - 1].time : null}
              />
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);
TimeList.propTypes = {
  timeList: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number,
      shortcut: PropTypes.shape({
        shortcut: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string
      })
    })
  )
};

TimeList.defaultProps = {
  timeList: []
};

export default React.memo(TimeList);
