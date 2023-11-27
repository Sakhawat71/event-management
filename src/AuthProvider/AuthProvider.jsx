import PropTypes from 'prop-types';
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config.js';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user,setUser] = useState([]);


    // Email Password
    const createUserWithEmailPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailPass(auth, email, password);
    }
    const logInWihtEmailPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google 
    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    //user
    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscriber();
    },[])


    // Logout
    const logOut = () =>{
        return signOut(auth);
    }

    const authinfo = {
        createUserWithEmailPass,
        logInWihtEmailPass,
        logOut,
        loading,
        googleSignIn,
        user,
    };
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;