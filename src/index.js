import React from 'react';
import './style.css';
import App from './App';

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* App */}
  </React.StrictMode>,
  document.getElementById('root')
);
