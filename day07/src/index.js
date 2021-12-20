import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BillProvider } from './context/BillContext'

ReactDOM.render(
  <React.StrictMode>
    <BillProvider>
    <App />
    </BillProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
