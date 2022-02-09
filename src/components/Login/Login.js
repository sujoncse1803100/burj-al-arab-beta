import React, { useContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebaseConfig from "./FirebaseConfig";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import "./Login.css";

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const hndleGoogleSignin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const { displayName, email, photoURL } = user;
        const newUser = { displayName, email, photoURL };
        setLoggedInUser(newUser);
        storeAuthToken();
      })
      .catch((error) => {});
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("authToken", idToken);
        history.replace(from);
      })
      .catch(function (error) {});
  };

  return (
    <div className="text-center pt-5">
      {!loggedInUser.email ? (
        <button className="btn btn-secondary " onClick={hndleGoogleSignin}>
          Google Sign In
        </button>
      ) : (
        <div className="text-center">
          <h1>You have already logged in</h1>
          <button
            onClick={() => setLoggedInUser({})}
            className="btn btn-danger mb-5 mt-5"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
