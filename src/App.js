import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { 
  HomePage,
  ShopPage
 } from "./pages/index.pages";

import { Header } from "./components/index.components";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
