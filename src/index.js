import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
    <Article/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
