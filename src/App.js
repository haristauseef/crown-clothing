import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from "./redux/user/user.actions"


class App extends Component{

  unSubscribeFromAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
    
     if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
      })

     } else{
       setCurrentUser(userAuth);
     }
      
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
   
  render(){
    return (
      <React.Fragment>
        <Header/>
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signup" component={SignInAndSignOut} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default connect(null, {setCurrentUser})(App);
