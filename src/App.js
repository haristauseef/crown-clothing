import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends Component{

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {

        this.setState({
          id: snapShot.id,
          ...snapShot.data()
        })
      })

      console.log("this is from state",this.state);
     }else{
       this.setState({currentUser: userAuth});
     }
      
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
   
  render(){
    return (
      <React.Fragment>
        <Header currentUser={this.state.currentUser} />
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signup" component={SignInAndSignOut} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
