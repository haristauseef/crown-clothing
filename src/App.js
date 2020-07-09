import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
