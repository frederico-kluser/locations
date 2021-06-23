/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};
render();
store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();