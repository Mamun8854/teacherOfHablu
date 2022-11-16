import React, { createContext } from "react";
import app from "../Firebase/Firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("login successful");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const authInfo = { signInWithGoogle };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
