// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {signInWithGoogle,createUserProfileDocument} from "../../utils/firebase/firebase.utils.js";
import SignUpForm from "../../sign-up/sign-up.component.jsx";
import SignInForm from "../../sign-in/sign-in.component.jsx";
import "./auth.styles.scss";

const Auth = () => {
    // useEffect(() => {
    //     const unsubscribe = async () => {
    //       const response = await getRedirectResult(auth);
    //       console.log(response);
    //       if(response){
    //         const userDocRef = await createUserProfileDocument(response.user);
    //       }
    //     };

    //     return () => unsubscribe();
    //   }, []);



    return (
        <div className="auth-container">
            {/* <button onClick={logGoogleUser}>Sign In with Google</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
            {/* <h1>Sign In</h1> */}
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default Auth;