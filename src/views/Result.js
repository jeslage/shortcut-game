import React, { useContext, useEffect } from 'react';
import { TimerContext } from '../context/TimerProvider';
import { ResultContext } from '../context/ResultProvider';
import timeFormat from '../utils/timeFormat';

const Result = () => {
  const { time, timeList } = useContext(TimerContext);
  const { results, getResultsFromDatabase, addResultToDatabase } = useContext(
    ResultContext
  );

  useEffect(() => {
    addResultToDatabase(time, timeList);
    getResultsFromDatabase();
  }, []);
  return (
    <>
      <ul>
        {results.map((result, index) => (
          <li key={result.id}>
            <span>{index + 1}</span>
            <p>{timeFormat(result.endTime)}</p>
            {index > 0 && (
              <p style={{ color: 'red' }}>
                - {timeFormat(result.endTime - results[0].endTime)}
              </p>
            )}
          </li>
        ))}
      </ul>
      <p>{timeFormat(time)}</p>
    </>
  );
};

export default Result;
