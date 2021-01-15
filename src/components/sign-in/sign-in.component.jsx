import React, { useState } from "react";
import { connect } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import {
  ButtonContainer,
  SignInContainer,
  SignInTitle
} from "./sign-in.styles";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
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

    emailSignInStart(email, password);
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
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
