import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {Wip} from './screens/Wip';
import {Iphone} from './screens/Iphone/Iphone';
import App from './app';

const app = document.getElementById('app');
const root = ReactDOMClient.createRoot(app);
root.render(<App />);
