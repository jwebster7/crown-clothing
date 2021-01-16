import React, { useState } from "react";
import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUp = ({ signUpStart }) => {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
    } else {
      const userCredentials = { displayName, email, password };
      signUpStart(userCredentials);
    }
  };

  const { displayName, email, password, confirmPassword } = state;
  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <p>Sign up with your email and password</p>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (credentials) => dispatch(signUpStart(credentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
