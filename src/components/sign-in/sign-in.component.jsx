import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import {
  ButtonContainer,
  SignInContainer,
  SignInTitle
} from "./sign-in.styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    // const value = event.target.value;
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    // const value = event.target.value;
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <p>Sign in with your email and password.</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="email"
          type="email"
          value={email}
          handleChange={handleEmailChange}
          required
        />
        <FormInput
          name="password"
          label="password"
          type="password"
          value={password}
          handleChange={handlePasswordChange}
          required
        />
        <ButtonContainer>
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
