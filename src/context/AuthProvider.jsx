import React from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
const provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {

    const userSignIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userGoogleSignIn = ()=>{
       return signInWithPopup(auth, provider)
    }
 const userInfo = {
    userSignIn,
    userGoogleSignIn,
 }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
