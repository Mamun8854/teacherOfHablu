import React, { createContext } from "react";
import app from "../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

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

  const emailPasswordSignUp = (email, password, name, photoURL) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;

        alert("User Create Successfully");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {});
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const emailPasswordSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const authInfo = {
    signInWithGoogle,
    emailPasswordSignUp,
    emailPasswordSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
