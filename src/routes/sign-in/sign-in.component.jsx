// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {signInWithGoogle,createUserProfileDocument} from "../../utils/firebase/firebase.utils.js";
import SignUpForm from "../../sign-up/sign-up.component.jsx";

const Signin = () => {
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

    const logGoogleUser = async () => {
        const {user} = await signInWithGoogle();
        const userDocRef = await createUserProfileDocument(user);
    }


    return (
        <div>
            <button onClick={logGoogleUser}>Sign In with Google</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
            <h1>Sign In</h1>
            <SignUpForm />
        </div>
    );
}

export default Signin;