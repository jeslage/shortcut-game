import React, { useContext, useRef, useEffect } from "react";

import timeFormat from "../../utils/timeFormat";
import { SettingsContext } from "../../context/SettingsProvider";
import { TimerContext } from "../../context/TimerProvider";
import { ResultContext } from "../../context/ResultProvider";

import StyledResults from "./Results.style";
import CircleIcon from "../../icons/circle";
import TopLine from "../topLine/TopLine";
import Button from "../button/Button";

const Results = () => {
  const {
    settings: { playerId },
    resetSettings,
    setSettings
  } = useContext(SettingsContext);
  const { resetTimer, time, timeList } = useContext(TimerContext);
  const {
    results,
    loadedResults,
    setLoadedResults,
    getResultsFromDatabase,
    addResultToDatabase
  } = useContext(ResultContext);

  const currentPlayerRef = useRef(null);
  const containerRef = useRef(null);

  // const place = results.findIndex(result => result.playerId === playerId) + 1;
  // const playerResult = results.find(result => result.playerId === playerId);

  const handleRetry = () => {
    resetTimer();
    resetSettings();
    setSettings(state => ({
      ...state,
      view: 1
    }));
  };

  useEffect(() => {
    addResultToDatabase(time, timeList);
    getResultsFromDatabase();

    return () => setLoadedResults(false);
  }, []);

  useEffect(() => {
    if (currentPlayerRef.current) {
      const { offsetTop } = currentPlayerRef.current;
      containerRef.current.scrollTop = offsetTop - 50;
    }
  }, [loadedResults]);

  return (
    <StyledResults>
      <TopLine label="Results" />
      <div className="results__wrapper" ref={containerRef}>
        {loadedResults ? (
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
                    className={
                      isCurrentPlayer ? "results__current-player" : null
                    }
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
        ) : (
          <div className="results__loading">
            <h3>Loading results...</h3>
          </div>
        )}
      </div>
      <Button type="button" onClick={() => handleRetry()}>
        Retry
      </Button>
    </StyledResults>
  );
};

export default Results;
