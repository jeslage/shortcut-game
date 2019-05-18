import React, { useContext, useRef, useEffect } from "react";

import timeFormat from "../../utils/timeFormat";
import { SettingsContext } from "../../context/SettingsProvider";
import StyledResults from "./Results.style";
import CircleIcon from "../../icons/circle";

const Results = ({ results, time }) => {
  const { playerId } = useContext(SettingsContext);
  const currentPlayerRef = useRef(null);
  const containerRef = useRef(null);

  const place = results.findIndex(result => result.playerId === playerId) + 1;
  const playerResult = results.find(result => result.playerId === playerId);

  useEffect(() => {
    const { offsetTop } = currentPlayerRef.current;
    containerRef.current.scrollTo(offsetTop - 50, 0);
  });

  return (
    <StyledResults ref={containerRef}>
      <div className="results__wrapper">
        <table>
          <thead>
            <tr className="results__sticky">
              <th className="results__place">#</th>
              <th>Name</th>
              <th>Endtime</th>
              <th>Difference</th>
            </tr>
          </thead>

          <tbody>
            {results.map((result, index) => {
              const isCurrentPlayer = playerId === result.playerId;

              return (
                <tr
                  key={result.playerId}
                  className={isCurrentPlayer ? "results__current-player" : null}
                  ref={isCurrentPlayer ? currentPlayerRef : null}
                >
                  <td className="results__place">
                    <span>{index + 1}.</span>
                    {isCurrentPlayer && <CircleIcon />}
                  </td>
                  <td>{result.player || "undefined"}</td>
                  <td>{timeFormat(result.endTime)}</td>
                  <td>
                    {index > 0 &&
                      `-${timeFormat(result.endTime - results[0].endTime)}`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </StyledResults>
  );
};

export default Results;
