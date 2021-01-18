import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 25px;
  justify-items: center;
  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    /* justify-items: center; */
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;