import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from 'firebase/app';


// import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyBt2IgfyW0AjbkoUGH3PnkSBBA9uFAbuzw",
  authDomain: "project-byte-brigade.firebaseapp.com",
  projectId: "project-byte-brigade",
  storageBucket: "project-byte-brigade.appspot.com",
  messagingSenderId: "209826066968",
  appId: "1:209826066968:web:07c6265c0fc6268e5cc96d",
  measurementId: "G-YRYMK88NCW"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
