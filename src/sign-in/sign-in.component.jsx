import { useState } from "react";

// import {createAuthUser} from "../utils/firebase/firebase.utils.js";
import { createUserProfileDocument,signInWithGoogle,signInAuthUser } from "../utils/firebase/firebase.utils.js";
import FormInput from "../form-input/form-input.component.jsx";
import "./sign-in.styles.scss";
import Button from "../button/button.component.jsx";


const INITIAL_STATE = {
    email: "",
    password: "",
}


const SignInForm =()=>{

    const signInWithGoogleMethod = async () => {
        const {user} = await signInWithGoogle();
        await createUserProfileDocument(user);
    }

    const [signUpForm,setSignUpForm] = useState(INITIAL_STATE);
    const {email,password} = signUpForm;

    console.log(signUpForm);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUser(email,password);
            setSignUpForm(INITIAL_STATE);

        }catch (err) {
            if(err.code === 'auth/wrong-password') {
                alert('Wrong password');
            }
            else if(err.code === 'auth/user-not-found') {
                alert('User not found');
            }
            else {
                alert(err.message);
            }

        }
    }

    const handleChange =(event)=>{
        const{name,value} = event.target;
        setSignUpForm({...signUpForm,[name]:value});
    }





    return(
        <div className="sign-up-container">
        <h2 className="title">Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={ handleSubmit} >
                <FormInput label="Email" type="email" id="email-signIn" value={email} onChange={handleChange} name="email" required/>
                <FormInput label="Password" type="password" id="password-signIn" value={password} onChange={handleChange} name="password" required/>
                <div className="buttons">

                <Button type="submit">Sign In</Button>
                <Button typeOf='google' type='button' onClick={signInWithGoogleMethod}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;