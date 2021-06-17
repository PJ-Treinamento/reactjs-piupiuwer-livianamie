import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  
  margin: 2rem;

  @media (min-width: 500px) {
    margin-right: 7rem;
  }
  @media (min-width: 800px) {
    margin-right: 18rem;
  }
  @media (min-width: 1200px) {
    margin-right: 22rem;
  }
`;