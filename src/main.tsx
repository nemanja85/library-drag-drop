import React from 'react';
import ReactDOM from 'react-dom/client';
import { DraggableUserList } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DraggableUserList />
  </React.StrictMode>
);
