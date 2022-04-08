import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from "./Header";
import Footer from "./Footer";


ReactDOM.render(
  <>
    <Header />
    <App />
    <Footer />
  </>,
  document.getElementById('root')
);

