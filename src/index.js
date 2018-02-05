// DEFAULT IMPORT
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// IMPORT JS DOM MAIN 
import './assets/js/main.js';

// IMPORT BULMA from library
import 'bulma/css/bulma.css';

// INDEX CSS 
import './index.css';

// REDIRECT WITHOUT LOADING
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();