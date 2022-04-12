import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Overlay from './Overlay.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Overlay />
  </React.StrictMode>,
  document.getElementById('root')
);