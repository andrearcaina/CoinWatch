import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import 'antd/dist/reset.css';
import reportWebVitals from './reportWebVitals';

// Render the App component into the root element.
const ROOT = ReactDOM.createRoot(document.getElementById('root'));

ROOT.render(
    <Router>
        <App />
    </Router>
);

reportWebVitals();
