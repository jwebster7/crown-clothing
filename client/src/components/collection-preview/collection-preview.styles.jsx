import styled from "styled-components";

// .collection-preview {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 30px;

//   .title {
// font-size: 28px;
// margin-bottom: 25px;
//   }

//   .preview {
// display: flex;
// justify-content: space-between;
//   }
// }

export const CollectionPreviewContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  margin-bottom: 30px; */

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  justify-items: center;
  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;
