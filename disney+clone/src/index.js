import React from 'react';
import  ReactDOM from 'react-dom';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, 
document.getElementById('root'));
