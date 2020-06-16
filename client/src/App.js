import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';

import Header from './Component/Header/Header';
import Home from './Page/Home/Home';
import Product from './Page/Product/Product';
import Brands from './Page/Brands/Brands';
import StyleLog from './Page/StyleLog/StyleLog';

import SignIn from './Component/SignIn/SignIn';

firebase.initializeApp({
  apiKey: "AIzaSyCW-_eube6pI4qTKBoX_ulouQNhzs-NPO4",
  authDomain: "splendid-cirrus-278518.firebaseapp.com"
})

// APP

class App extends React.Component {
  
  state= {
    isSignedIn : false
  }
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user =>  {
      // console.log(user);
      this.setState({isSignedIn : !!user})
    })
  }

  render () {
    return (
      <div>
        {this.state.isSignedIn
          ? (
            <BrowserRouter>
  
              <div className="page-content">          
                <div className="sideHeader">
                  <Header
                    signout = {()=> firebase.auth().signOut()}
                    userImage = {firebase.auth().currentUser.photoURL}
                    userName = {firebase.auth().currentUser.displayName}
                    userEmail = {firebase.auth().currentUser.email}
                  />
                </div>
                <Switch>
                    <div className="right">
                      <Route path="/" exact component={Home} />
                      <Route path="/product" exact component={Product} />
                      <Route path="/brands" exact component={Brands} />
                      <Route path="/log" exact component={StyleLog} />
                    </div>
                </Switch>
              </div>
        
            </BrowserRouter>
          )
          : (
            <SignIn />
          )
        }
      </div>
    );
  }
}

export default App;

