import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('root');
if (!container) {
  throw new Error('No root html element found');
}
const root = createRoot(container);
root.render(
  <div><p>Inside react!</p><App/></div>,
);

window