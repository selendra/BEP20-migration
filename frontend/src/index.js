import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <HeaderComponent />
    <App />
    <FooterComponent />
  </React.StrictMode>,
  document.getElementById('root')
);