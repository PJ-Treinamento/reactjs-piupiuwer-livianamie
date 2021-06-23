import styled from "styled-components";
import { List, Search, Earlybirds, XCircle } from '../../styles/Icons';

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

export const SearchFeature = styled.div`
  display: none;
  align-items: center;

  @media (min-width: 800px) {
    display: flex;
  }

  > button {
    width: 12rem;
    height: 2.5rem;

    margin-right: 2.5rem;
    padding: 0.1rem 0.5rem;

    border: 0.15rem solid #7C00F3;
    border-radius: 0.8rem;
    box-shadow: 0.2rem 0.2rem 0 0 #FFF500;

    cursor: pointer;

    background-color: var(--purple);

    color: var(--yellow);
    text-shadow: 0.1rem 0.1rem 0 #000000;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;

    &:hover,
    &:active {
      color: var(--darker-purple);
    }

    @media (min-width:1200px) {
      width: 14rem;
      height: 3rem;

      margin-right: 3.5rem;
      padding: 0.1rem 1rem;

      font-size: 1.4rem;
    }
  }
`;

export const PopUpWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.25);

  width: 100vw;
  height: 100%;
`;

export const PopUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 3rem;

  background-color: white;

  border-radius: 0.8rem;
  border: 0.15rem solid #7C00F3;

  > input {
    width: 15rem;
    height: 2.5rem; 

    margin-bottom: 2rem;
    padding: 0.3rem 0.6rem;

    background-color: var(--lighter-purple);

    border: 0.15rem solid var(--darker-purple);
    border-radius: 0.8rem;
    box-shadow: 0.2rem 0.2rem 0 0 var(--yellow);

    font-size: 1.1rem;

    @media (min-width:1200px) {
      width: 18rem;
      height: 3rem;

      font-size: 1.3rem;
    }
  }
`;

export const UsersList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 30rem;

  border: 0.15rem solid var(--darker-purple);
  border-radius: 0.8rem;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 0.8rem;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.8rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  } 
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  width: 25rem;

  padding: 1rem 2rem;

  cursor: pointer;

  border-top: 0.05rem solid var(--purple);

  :first-child {
    border-top: none;
  }

  &:hover {
    color: var(--darker-purple);
  }

  > img {
    width: 3.8rem;
    height: 3.8rem;

    margin-right: 1rem;

    object-fit: cover;

    border: 0.15rem solid var(--darker-purple);
    border-radius: 50%;

    cursor: pointer;

    @media (min-width: 1200px) {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > strong {
    font-size: 1.1rem;
    
    @media (min-width:1200px) {
      font-size: 1.3rem;
    }
  }
  > p {
    font-size: 1.1rem;
    
    @media (min-width:1200px) {
      font-size: 1.2rem;
    }
  };
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
export const MoreIcon = styled(List)`
  width: 1.6rem;

  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }
`;
export const CloseIcon = styled(XCircle)`
  width: 2rem;
  color: var(--darker-purple);

  margin-top: 3rem;

  cursor: pointer;

  @media (min-width: 1200px) {
    width: 3rem
  }
`;


