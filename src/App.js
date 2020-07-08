import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/homepage.component';


function App() {
  return (
    <React.Fragment>
      <Switch>
      <Route path="/" exact component={HomePage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
