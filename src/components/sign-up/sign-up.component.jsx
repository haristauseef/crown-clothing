import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    handleSubmit = async (event) => {
        const { displayName, email, password, confirmPassword} = this.state;
        event.preventDefault();

        if(password !== confirmPassword){
            alert("password and confirm password are not same!!!");
        }

        try{

            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState = {
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            }

        }catch (error) {

        }
    }

    handleChange = (event) => {

        const {name, value} = event.target;
        this.setState({[name]: value});

    }


    render(){
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="text" 
                    name="displayName" 
                    value={displayName} 
                    onChange={this.handleChange}
                    label="Name"
                    required
                    />

                    <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={this.handleChange}
                    label="email"
                    required
                    />

                    <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={this.handleChange}
                    label="Password"
                    required
                    />

                    <FormInput 
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    onChange={this.handleChange}
                    label="ConfirmPassword"
                    required
                    />
                    

                    <CustomButton type="submit">SignUp</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;