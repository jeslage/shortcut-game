import React from 'react';
import PropTypes from 'prop-types';

import timeFormat from '../../utils/timeFormat';

import './TimeList.css';

const Time = ({ number, timePassed, description, difference }) => (
  <div className="Time">
    <span className="Time__number">{number}</span>
    <span className="Time__shortcut">{description}</span>
    <span className="Time__time">{timeFormat(timePassed)}</span>

    <span className="Time__prevTime">{timeFormat(difference)}</span>
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
                timePassed={entry.timePassed}
                description={entry.description}
                difference={entry.difference}
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
      shortcut: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string
    })
  )
};

TimeList.defaultProps = {
  timeList: []
};

export default React.memo(TimeList);
