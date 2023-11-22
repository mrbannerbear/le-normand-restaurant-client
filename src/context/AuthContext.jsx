/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import AxiosPublic from "../components/custom/AxiosPublic";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      AxiosPublic().post("/jwt", {email: currentUser.email})
      .then(res => {
        if(res.data?.token){
          localStorage.setItem("token", res.data.token)
        }
        else{
          localStorage.removeItem("token")
        }
      })
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    return signOut(auth);
  };

  const info = { user, loading, signup, login, logout };

  return <AuthProvider.Provider value={info}>{children}</AuthProvider.Provider>;
};

export default AuthContext;
