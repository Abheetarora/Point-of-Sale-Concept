import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore'


var firebaseConfig = {
  apiKey: "AIzaSyB3WuWBil2nzggIMywwIEeNY8mdAhSuFIY",
  authDomain: "cart-72a6e.firebaseapp.com",
  projectId: "cart-72a6e",
  storageBucket: "cart-72a6e.appspot.com",
  messagingSenderId: "570948417658",
  appId: "1:570948417658:web:554d5a50f0327584dea3c3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

