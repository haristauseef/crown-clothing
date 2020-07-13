import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInwithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {

    constructor(){
        super();

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async (event) =>{
        const {email, password } = this.state;
        event.preventDefault();

        try{
           await auth.signInWithEmailAndPassword(email, password);
            this.setState({
            email: "",
            password: ""
            })
        }catch (error){
            console.log("error from signin ", error.message);
        }
    } 

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render(){
        
        
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with username and password</span>
                <form onSubmit={this.handleSubmit}>
                <FormInput type="email" required name="email" value={this.state.email} handleChange={this.handleChange} label="email"/>

                <FormInput type="password" required name="password" value={this.state.password} handleChange={this.handleChange} label="password"/>
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit">Sign In</CustomButton>
                        <CustomButton onClick={signInwithGoogle} value="Submit" >
                            Sign In with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;