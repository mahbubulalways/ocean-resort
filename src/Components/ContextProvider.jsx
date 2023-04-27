import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
export const AuthContext=createContext(null)
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged ,GoogleAuthProvider,signInWithPopup,signOut,updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);
const ContextProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [users,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
    const handleGoogle=()=>{
       return signInWithPopup(auth, googleProvider)
    }
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
     })
     return ()=> unsubscribe();
    },[])
    
    const handleSignOut=()=>{
       return signOut(auth)
    }

    const handleUpdate=(user,name,file)=>{
        updateProfile(user, {
            displayName: name, photoURL: file
          })
    }


    const authInfo ={
        users,
        createUser,
        SignInUser,
        handleGoogle,
        handleSignOut,
        loading,
        handleUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;