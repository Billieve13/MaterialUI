import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactFormApp from './ReactFormApp';
import DataGridApp from './DataGridApp';
import DataGridProject from './datagridproject/DataGridProject';
import Data from './datagridproject/Data';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import DarkLightMode from './components_section_12/DarkLightMode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <DarkLightMode />
      {/* need to change based on whatever is being worked on */}
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
