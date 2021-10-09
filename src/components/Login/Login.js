import React, { useContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import firebaseConfig from './FirebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const hndleGoogleSignin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const { displayName, email, photoURL } = user;
                const newUser = { displayName, email, photoURL };
                setLoggedInUser(newUser);
                history.replace(from);
            }).catch((error) => {

            });
    }
    return (
        <div>
            <button clasName="" onClick={hndleGoogleSignin}>
                google login
            </button>
        </div>
    );
};

export default Login;