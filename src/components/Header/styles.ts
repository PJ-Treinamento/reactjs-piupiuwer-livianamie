import styled from "styled-components";
import { List, Search, Earlybirds } from '../../styles/Icons';

export const Container = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 4.5rem;
  
  padding: 0 1.5rem;
  background-color: white;
  border-bottom: 0.2rem solid var(--purple);

  @media (min-width: 800px) {
    height: 5rem;
  }

  @media (min-width: 1200px) {
    height: 6rem;
  }

  > #more {
    @media (min-width: 800px) {
      display: none;
    }
  }
`;
export const PageInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: fit-content;

  > strong {
    font-size: 1.4rem;

    @media (min-width: 800px) {
      font-size: 1.6rem;
    }
    @media (min-width: 1200px) {
      font-size: 2rem;
    }
  }
`;
export const Logo = styled(Earlybirds)`
  width: 2rem;
  color: var(--purple);

  margin-right: 1rem;

  @media (min-width: 800px) {
    width: 2.5rem;

    margin-right: 1.5rem;
  }

  @media (min-width: 1200px) {
    width: 3rem;

    margin-right: 2rem;
  }
`;
export const SearchFeature = styled.div`
  display: none;
  align-items: center;

  @media (min-width: 800px) {
    display: flex;
  }

  > input {
    width: 10rem;
    height: 2.5rem; 

    padding: 0.3rem 0.6rem;

    border: 0.15rem solid #7C00F3;
    border-radius: 0.8rem 0 0 0.8rem;
    box-shadow: 0 0.2rem 0 0 #FFF500;

    font-size: 1rem;

    @media (min-width: 800px) {
      width: 11rem;
    }
    @media (min-width:1200px) {
      width: 14rem;
      height: 3rem;

      font-size: 1.2rem;
    }
  }

  > button {
    height: 2.5rem;
    padding: 0.1rem 0.5rem;

    border: 0.15rem solid #7C00F3;
    border-left: 0;
    border-radius: 0 0.8rem 0.8rem 0;
    box-shadow: 0.2rem 0.2rem 0 0 #FFF500;

    @media (min-width:1200px) {
      height: 3rem;
      padding: 0.1rem 0.8rem;
    }
  }
`;
export const SearchIcon = styled(Search)`
  width: 1.1rem;

  cursor: pointer;

  @media (min-width:1200px) {
    width: 1.5rem;
  }
`;
export const MoreIcon = styled(List)`
  width: 1.6rem;

  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }
`;

