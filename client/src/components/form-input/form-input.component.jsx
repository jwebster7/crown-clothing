import React from "react";

import {
  FormInputContainer,
  FormInputLabelContainer,
  GroupContainer
} from "./form-input.styles";
// import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabelContainer className={otherProps.value.length ? 'shrink' : ''}>{label}</FormInputLabelContainer>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
