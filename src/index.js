import React from 'react';
import { initializeApp } from "firebase/app";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import './index.css';

const firebaseConfig = {
  apiKey: "AIzaSyB7bMpFXMjbRr97p0ilq6ECDEvMVzdZzVU",
  authDomain: "barneys-bebidas.firebaseapp.com",
  projectId: "barneys-bebidas",
  storageBucket: "barneys-bebidas.appspot.com",
  messagingSenderId: "1033397562486",
  appId: "1:1033397562486:web:f817637b3a18b887c0c357"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
