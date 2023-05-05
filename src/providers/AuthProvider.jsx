import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';
import { GithubAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }


    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserData = (user, name, photo) => {
        return updateProfile(user, {
            photoURL : photo,
            displayName : name
        })
        .then(() => {
            console.log("user name updated");
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // observe auth state changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserData,
        signIn,
        githubLogin,
        googleLogin,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;