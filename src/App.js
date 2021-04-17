import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { 
  HomePage,
  ShopPage,
  SignInAndSignUpPage
 } from "./pages/index.pages";

import { Header } from "./components/index.components";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged( async user => {
      if(user){
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snap)=>{
          this.setState({
            currentUser: {
              id: snap.id,
              ...snap.data()
            }
          })
          console.log(this.state);
        });
      }

      this.setState({ currentUser: user })

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
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
