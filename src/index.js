import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnMofuoHhF70zBm4I0T2OQwP2okZRkgzw",
    authDomain: "ipod-pg.firebaseapp.com",
    databaseURL: "https://ipod-pg.firebaseio.com",
    projectId: "ipod-pg",
    storageBucket: "ipod-pg.appspot.com",
    messagingSenderId: "994790141410",
    appId: "1:994790141410:web:a8303bc4f500edb716ddbb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

 