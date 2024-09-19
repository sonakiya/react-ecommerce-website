import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app); // Initialize Firebase Auth with your app
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Set loading to true initially

  // Create user with email and password
  const createUser = (email, password) => {
    setLoading(true); // Start loading when signing up
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google
  const signUpWithGmail = () => {
    setLoading(true); // Start loading when signing in with Google
    return signInWithPopup(auth, googleProvider);
  };

  // Login with email and password
  const login = (email, password) => {
    setLoading(true); // Start loading when logging in
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout user
  const logout = () => {
    setLoading(true); // Set loading before logging out
    return signOut(auth).then(() => {
      setUser(null); // Clear user after sign-out
      setLoading(false); // Stop loading after sign-out
    });
  };

  // Check if the user is authenticated or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user when state changes
      setLoading(false); // Stop loading after checking auth state
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signUpWithGmail,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
