import React, { children, createContext, useEffect } from 'react';
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
const [reload ,setReload]=useState(0)
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true)


const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
    
}

const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}

const googleSignIn  = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
    
}

const githubSignIn =() =>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
}

const updateUser = ( name, photo) =>{
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
    })
}

const logOut = () =>{
    setLoading(true)
    return signOut(auth);
}



useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) =>{
        // console.log('obser logged', loggedUser)
        
        setLoading(false)
        setUser(loggedUser)
    })

    return () => {
         unsubscribe()
    }
},[reload])

const authInfo = {
user,
createUser,
signIn,
logOut, 
googleSignIn,
githubSignIn,
updateUser,
loading,
setReload,
}

    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;