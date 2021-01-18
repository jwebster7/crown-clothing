import styled from "styled-components";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      img {
        opacity: unset;
      }

      button {
        opacity: unset;
        display: flex;
      }
    }
  }
`;

export const CollectionImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.div`
  width: 90%;
  margin-bottom: 15px;
  margin: 0 auto 15px 0;
  /* @media screen and (max-width: 800px) {
    width: 70%;
  } */
`;

export const PriceContainer = styled.div`
  width: 15%;
  text-align: right;
`;

export const CustomButtonContainer = styled.button`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;
