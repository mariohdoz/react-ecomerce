import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { 
  HomePage,
  ShopPage,
  SingInAndSignUpPage
 } from "./pages/index.pages";

import { Header } from "./components/index.components";
import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SingInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
