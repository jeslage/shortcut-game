import React, { useContext, useState } from 'react';
import { SettingsContext } from './SettingsProvider';
import * as firebase from 'firebase';

export const ResultContext = React.createContext();

const ResultProvider = ({ children }) => {
  const { player, selectedApp, round } = useContext(SettingsContext);

  const [results, setResults] = useState([]);

  const appResults = firebase
    .database()
    .ref()
    .child('results')
    .child(selectedApp);

  const getResultsFromDatabase = () => {
    appResults.on('value', snap => {
      const resultsObject = snap.val();

      const resultsList = Object.keys(resultsObject).map(key => ({
        ...resultsObject[key],
        id: key
      }));

      const sortedResultsList = resultsList.sort((a, b) => {
        return a.endTime - b.endTime;
      });

      setResults(sortedResultsList);
    });
  };

  const addResultToDatabase = (time, timeList) => {
    const result = {
      date: Date.now(),
      mode: 'speed',
      player,
      playedRounds: round,
      endTime: time,
      solvedShortcuts: timeList
    };
    console.log(result);

    appResults.push(result);
  };

  return (
    <ResultContext.Provider
      value={{ results, addResultToDatabase, getResultsFromDatabase }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const ResultConsumer = ResultContext.Consumer;

export default ResultProvider;
