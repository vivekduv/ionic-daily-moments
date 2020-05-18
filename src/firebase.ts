import firebase from 'firebase/app';

// Replace the following with the config for your own Firebase project
// https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
  apiKey: "???",
  authDomain: "???",
  databaseURL: "???",
  projectId: "???",
  storageBucket: "???",
  messagingSenderId: "???",
  appId: "???"
};

const app = firebase.initializeApp(firebaseConfig);
