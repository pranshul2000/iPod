import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.ipod_apiKey,
    authDomain: process.env.ipod_authDomain,
    databaseURL:process.env.ipod_databaseURL,
    projectId: "ipod-pg",
    storageBucket:process.env.ipod_storageBucket,
    messagingSenderId: process.env.ipod_messagingSenderId,
    appId: process.env.ipod_appId
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

 