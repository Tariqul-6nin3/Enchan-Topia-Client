/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../../firebase.config";

const auth = getAuth(app);

export const myContext = createContext();
const Context = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loggedInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsuscribe();
    };
  }, []);
  const authInfo = {
    createUser,
    loggedInUser,
    logOutUser,
    user,
    loading,
    setLoading,
  };
  return <myContext.Provider value={authInfo}>{children}</myContext.Provider>;
};

export default Context;
