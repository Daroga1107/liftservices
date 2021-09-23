import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>, 
  document.getElementById('root') //Render our App (our custom html element) into the element of the root id
);