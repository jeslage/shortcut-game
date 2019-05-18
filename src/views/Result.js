import React, { useContext, useEffect } from "react";
import { TimerContext } from "../context/TimerProvider";
import { ResultContext } from "../context/ResultProvider";

import Results from "../components/results/Results";

const Result = () => {
  const { time, timeList } = useContext(TimerContext);
  const {
    results,
    fetchedResults,
    getResultsFromDatabase,
    addResultToDatabase
  } = useContext(ResultContext);

  useEffect(() => {
    addResultToDatabase(time, timeList);
    getResultsFromDatabase();
  }, []);

  return fetchedResults ? <Results results={results} /> : <h2>LOADING</h2>;
};

export default Result;
