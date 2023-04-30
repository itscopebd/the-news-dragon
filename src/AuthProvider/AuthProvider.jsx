import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../Firebase/Firebase';
import { useEffect } from 'react';
import { useState } from 'react';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [User, setUser] = useState(null);
const [loading,setLoading]=useState(true)
    const auth = getAuth(app);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const verifiyedEmailSend = (user) => {
        setLoading(true)
        return sendEmailVerification(user)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }



    const AuthInfo = {
        User,
        createUser,
        singIn,
        verifiyedEmailSend,
        logOut,
        loading
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (logInUser) => {
            setUser(logInUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;