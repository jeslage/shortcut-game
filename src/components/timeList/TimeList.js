import React from 'react';
import PropTypes from 'prop-types';

import timeFormat from '../../utils/timeFormat';

import StyledTimeList from './TimeList.style.js';

const Time = ({ number, timePassed, description, difference }) => (
  <>
    <td className="Time__shortcut">{description}</td>
    <td className="Time__time">{timeFormat(timePassed)}</td>
    <td className="Time__prevTime">{timeFormat(difference)}</td>
  </>
);

const TimeList = ({ timeList }) => (
  <StyledTimeList>
    <table>
      <thead>
        <tr>
          <th class="Timelist__shortcut">Shortcut</th>
          <th>Gesamtzeit</th>
          <th>Einzelzeit</th>
        </tr>
      </thead>

      <tbody>
        {timeList.reverse().map((entry, index) => {
          return (
            <tr key={entry.timePassed}>
              <Time
                timePassed={entry.timePassed}
                description={entry.description}
                difference={entry.difference}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  </StyledTimeList>
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
