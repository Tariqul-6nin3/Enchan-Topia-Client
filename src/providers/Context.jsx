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
import { getRole } from "../api/SaveUser";

const auth = getAuth(app);

export const myContext = createContext();
const Context = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    if (user) {
      getRole(user.email).then(data => setRole(data));
    }
  }, [user]);

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
    role,
    setRole,
  };
  return <myContext.Provider value={authInfo}>{children}</myContext.Provider>;
};

export default Context;
