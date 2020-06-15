import React from 'react';
import './SignIn.scss';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import logo from '../../Asset/logo-notext.png';
import onedrobe from '../../Asset/logo-noimage.png';

class SignIn extends React.Component{
    

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
    render () {
        return (
            <div className="signin">
    
                <img className="signin__logo" src={logo} alt="onedrobe logo"/>
    
                <div className="signin--right">

                    <img className="signin__title" src={onedrobe} alt="onedrobe"/>
                    <p></p>
                    <StyledFirebaseAuth 
                    className="signin__link"
                    uiConfig = {this.uiConfig}
                    firebaseAuth={firebase.auth()}
                    />

                </div>
    
            </div>
        )
    }
};

export default SignIn;
