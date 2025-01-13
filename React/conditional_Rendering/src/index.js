import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App from '../src/Component/random_number'
import reportWebVitals from './reportWebVitals';
import SuggestionApp from './Component/GoogleSearchSuggestions/suggestionApp';
// import SimpleApp from './Component/SimpleTodos/SimpleApp';
// import CashApp from './Component/CashWithdrawal/cashApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App /> */}
    {/* < SimpleApp /> */}
    {/* <CashApp /> */}
   
    <SuggestionApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
