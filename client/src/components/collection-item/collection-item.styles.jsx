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
`;

export const PriceContainer = styled.div`
  width: 10%;
`;

export const CustomButtonContainer = styled.button`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

// .collection-item {
//   width: 22vw;
//   display: flex;
//   flex-direction: column;
//   height: 350px;
//   align-items: center;
//   position: relative;

//   .collection-image {
//     width: 100%;
//     height: 95%;
//     background-size: cover;
//     background-position: center;
//     margin-bottom: 5px;
//   }

//   .collection-footer {
//     width: 100%;
//     height: 5%;
//     display: flex;
//     justify-content: space-between;
//     font-size: 18px;

//     .name {
//       width: 90%;
//       margin-bottom: 15px;
//     }

//     .price {
//       width: 10%;
//     }
//   }

//   button {
//     width: 80%;
//     opacity: 0.7;
//     position: absolute;
//     top: 255px;
//     display: none;
//   }

//   &:hover {
//     .collection-image {
//       opacity: 0.8;
//     }

//     button {
//       opacity: 0.85;
//       display: flex;
//     }
//   }
// }
