import React, { useContext } from 'react';
import './Login.css';
import Navbar from '../Shared/Navbar/Navbar';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import googleLogo from '../../images/google.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const app = initializeApp(firebaseConfig);

const Login = () => {
    const {userInfo} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            // sessionStorage.setItem('token', credential.idToken ) ;
          
            setLoggedInUser(user);
            history.replace(from);
       
        }).catch((error) => {  
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });


    }




    return (
        <section className="login-section">
           <Navbar />
            <div  className="signin">
                <h2>Sign In</h2>
                <div className="signin-btn" onClick={handleGoogleSignIn}>
                    <img src={googleLogo} alt="" />
                    <p>Continue with Google</p>
                </div>
            </div>
           

            
        </section>
    );
};

export default Login;