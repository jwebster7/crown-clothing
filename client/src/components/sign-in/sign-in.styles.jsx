import styled from "styled-components";

// .sign-in {
//   width: 380px;
//   display: flex;
//   flex-direction: column;

//   .button-container {
//     display: flex;
//     justify-content: space-between;
//   }

//   .title {
//     margin: 10px 0;
//   }
// }

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 325px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;
