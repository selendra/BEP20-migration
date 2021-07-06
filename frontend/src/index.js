import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer';

ReactDOM.render(
  <>
    <HeaderComponent />
    <App />
    <FooterComponent />
  </>,
  document.getElementById('root')
);