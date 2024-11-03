import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './src/dev';
import App from './src/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DevSupport ComponentPreviews={ComponentPreviews}
              useInitialHook={useInitial}
  >
    <App />
  </DevSupport>,
);