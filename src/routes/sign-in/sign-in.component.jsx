import {signInWithGoogle,createUserProfileDocument} from "../../utils/firebase/firebase.utils.js";

const Signin = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGoogle();
        const userDocRef = await createUserProfileDocument(user);
    }


    return (
        <div>
            <button onClick={logGoogleUser}>Sign In with Google</button>
            <h1>Sign In</h1>
        </div>
    );
}

export default Signin;