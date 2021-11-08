import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as SW from "./pwa/serviceWorkers/sw.ts";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

SW.register();
