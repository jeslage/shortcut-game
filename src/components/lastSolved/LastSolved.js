import React from "react";

import timeFormat from "../../utils/timeFormat";

import StyledLastSolved from "./LastSolved.style";

const LastSolved = ({ timeList }) =>
  timeList && timeList.length ? (
    <StyledLastSolved>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Last Solved</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {timeList.map((time, index) => (
            <tr key={time.timePassed}>
              <td>{index + 1}</td>
              <td>{time.description}</td>
              <td>{timeFormat(time.timePassed)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledLastSolved>
  ) : null;

export default React.memo(LastSolved);
