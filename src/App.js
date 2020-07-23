import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckOutPage from './pages/checkout/checkout.component';

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
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route path="/signin" exact render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignOut />) } />
        </Switch>
      </React.Fragment>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, {setCurrentUser})(App);
