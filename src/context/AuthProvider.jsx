import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
const provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
    const userSignIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userGoogleSignIn = ()=>{
       return signInWithPopup(auth, provider)
    }
    const updateUserInfo = (profileInfo)=>{
      return updateProfile(auth.currentUser, {displayName: profileInfo.name, photoURL: profileInfo.photoUrl})
      .then(()=>{
        setUser({...auth.currentUser})
      })
    }
    const createUserWithEmailPass = (email, password)=>{
      return createUserWithEmailAndPassword(auth,email, password)
    }
    const logOut = ()=>{
      return signOut(auth)
    }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
      })
      return ()=> unsubscribe();
    },[user])

 const userInfo = {
    userSignIn,
    userGoogleSignIn,
    updateUserInfo,
    createUserWithEmailPass,
    user,
    logOut

 }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
