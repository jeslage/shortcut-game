import React, { useContext } from "react";

import timeFormat from "../../utils/timeFormat";
import { SettingsContext } from "../../context/SettingsProvider";
import StyledResults from "./Results.style";

const Results = ({ results, time }) => {
  const { playerId } = useContext(SettingsContext);
  const place = results.findIndex(result => result.playerId === playerId) + 1;
  const playerResult = results.find(result => result.playerId === playerId);

  return (
    <StyledResults>
      <h2>
        {place}. <p>{timeFormat(playerResult.endTime)}</p>
      </h2>
      <table>
        <thead>
          <tr>
            <th className="Results__place">Place</th>
            <th>Name</th>
            <th>Endtime</th>
            <th>Difference</th>
          </tr>
        </thead>

        <tbody>
          {results.map((result, index) => (
            <tr
              key={playerId}
              className={
                playerId === result.playerId ? "Results__current-player" : null
              }
            >
              <td className="Results__place">{index + 1}.</td>
              <td>{result.player || "NONAME"}</td>
              <td>{timeFormat(result.endTime)}</td>
              <td>
                {index > 0 &&
                  `-${timeFormat(result.endTime - results[0].endTime)}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledResults>
  );
};

export default Results;
