import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBJ9Wq_IinM2B65qA9FXmajjIBsG1LUR1Y',
  authDomain: 'shortcut-game.firebaseapp.com',
  databaseURL: 'https://shortcut-game.firebaseio.com',
  projectId: 'shortcut-game',
  storageBucket: 'shortcut-game.appspot.com',
  messagingSenderId: '792913187186'
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const scoresRef = databaseRef.child('scores');
