import React from 'react';
import './SignIn.scss';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import logo from '../../Asset/signinlogo.png';
import onedrobe from '../../Asset/logo-noimage.png';

class SignIn extends React.Component{

  state={
    open: false,
  }
  
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  
  openHandle = (e) => {
    const open = this.state.open;
    this.setState({
      open: !open
    })
  }
  
render () {
    return (
      <div className="signin">
        <div className="signin--left">
    
          {this.state.open === false &&
          <>
            <img className="signin__logo" onClick={this.openHandle} src={logo} alt="onedrobe logo"/>
            <p className="signin__sub"></p>
          </>
          }
        </div>
    
        {this.state.open &&
          <div className="signin--right">
        
            <img className="signin__title" src={onedrobe} alt="onedrobe"/>
            <StyledFirebaseAuth 
              className="signin__link"
              uiConfig = {this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
        
          </div>
        }
    </div>
    )
  }
};

export default SignIn;
