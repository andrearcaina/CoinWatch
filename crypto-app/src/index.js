import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store';
import 'antd/dist/reset.css';
import reportWebVitals from './reportWebVitals';

// Render the App component into the root element.
const ROOT = ReactDOM.createRoot(document.getElementById('root'));

ROOT.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
