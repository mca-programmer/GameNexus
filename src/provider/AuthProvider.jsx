import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liveEmail, setLiveEmail] = useState("");
  // console.log(user);
  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const Register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const UpdateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const ForgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const GoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const Logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    loading,
    setLoading,
    Login,
    Register,
    UpdateUser,
    GoogleLogin,
    ForgetPassword,
    Logout,
    liveEmail,
    setLiveEmail,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
