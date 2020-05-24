import React from 'react';
import LoginPage from './Components/Login'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import RouterMeta from './RouterMeta'
import './App.css';

function App() {
  return (
    <div >
      <Router>
        <RouterMeta/>
      </Router>
    </div>
  );
}

export default App;
