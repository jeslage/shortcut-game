import React, { useContext, useEffect, useState } from 'react';
import { SettingsContext } from './SettingsProvider';

import firebase from '../config/db/firebase';
import 'firebase/database';
import 'firebase/auth';

export const ResultContext = React.createContext();

const ResultProvider = ({ children }) => {
  const { settings } = useContext(SettingsContext);
  const { playerId, player, selectedApp, selectedLevel, round } = settings;

  const [results, setResults] = useState([]);
  const [loadedResults, setLoadedResults] = useState(false);

  useEffect(() => {
    firebase
      .auth()
      .signInAnonymously()
      .catch(error => {
        const { code, message } = error;

        if (code === 'auth/operation-not-allowed') {
          alert('You must enable Anonymous auth in the Firebase Console.');
        } else {
          console.error(code, message);
        }
      });

    return () => firebase.auth().signOut();
  }, []);

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

      const filteredResultsList = resultsList.filter(
        result => result.level === selectedLevel
      );

      const sortedResultsList = filteredResultsList.sort((a, b) => {
        return a.endTime - b.endTime;
      });

      setResults(sortedResultsList);
      setLoadedResults(true);
    });
  };

  const addResultToDatabase = (time, timeList) => {
    if (time && timeList) {
      const result = {
        playerId,
        date: Date.now(),
        player,
        level: selectedLevel,
        playedRounds: round,
        endTime: time,
        solvedShortcuts: timeList
      };

      appResults.push(result);
    }
  };

  return (
    <ResultContext.Provider
      value={{
        results,
        addResultToDatabase,
        getResultsFromDatabase,
        loadedResults,
        setLoadedResults
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const ResultConsumer = ResultContext.Consumer;

export default ResultProvider;
