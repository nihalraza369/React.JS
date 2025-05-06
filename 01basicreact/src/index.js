import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './day01'

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
//reactstrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants. It does not render any visible UI. It activates additional checks and warnings for its descendants. It does not render any visible UI. It is a development tool only and does not affect the production build.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);




