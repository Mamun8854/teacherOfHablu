import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Sign In Successfully With Gmail");
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
        toast.success("Successfully Sign Up");
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
        toast.success("Sign In Successfully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then()
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    signInWithGoogle,
    emailPasswordSignUp,
    emailPasswordSignIn,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
