import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DarkApp from './Component/LightDarkMode/DarkApp';
import ShowHideApp from './Component/ShowHideApp/showHideApp';
import EvenApp from './Component/EvenOddApp/EvenOddApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <DarkApp /> */}
    {/* <ShowHideApp /> */}
    <EvenApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
