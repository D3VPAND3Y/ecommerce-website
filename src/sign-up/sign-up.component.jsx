import { useState } from "react";

import {createAuthUser} from "../utils/firebase/firebase.utils.js";
import { createUserProfileDocument } from "../utils/firebase/firebase.utils.js";
import FormInput from "../form-input/form-input.component.jsx";
import "./sign-up.styles.scss";
import Button from "../button/button.component.jsx";

const INITIAL_STATE = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}


const SignUpForm =()=>{
    const [signUpForm,setSignUpForm] = useState(INITIAL_STATE);
    const {displayName,email,password,confirmPassword} = signUpForm;




    // console.log(signUpForm);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }
        try {
            const {user} = await createAuthUser(email,password);
            await createUserProfileDocument(user,{displayName});
            setSignUpForm(INITIAL_STATE);

        }catch (err) {
            if(err.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
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
        <h2 className="title">Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={ handleSubmit} >
                <FormInput label="DisplayName" type="text" id="displayName" value={displayName} onChange={handleChange} name="displayName" required/>
                <FormInput label="Email" type="email" id="email" value={email} onChange={handleChange} name="email" required/>
                <FormInput label="Password" type="password" id="password" value={password} onChange={handleChange} name="password" required/>
                <FormInput label="ConfirmPassword" type="password" id="confirmPassword" value={confirmPassword} onChange={handleChange} name="confirmPassword"  required/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;