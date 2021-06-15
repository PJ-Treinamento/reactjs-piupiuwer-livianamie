import styled from "styled-components";
import { Search, Earlybirds } from '../../styles/Icons';

export const Container = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  
  padding: 1.3rem;
  background-color: white;
  border-bottom: 0.2rem solid var(--purple);

  > #mobile-search {
    @media (min-width:700px) {
      display: none;
    }
  }
`;
export const PageInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: fit-content;

  font-size: 1.4rem;
`;
export const Logo = styled(Earlybirds)`
  width: 2rem;
  color: var(--purple);

  margin-right: 1rem;
`;
export const SearchFeature = styled.div`
  display: none;
  align-items: center;

  > input {
    padding: 0.3rem 0.6rem;

    border: 0.15rem solid #7C00F3;
    border-radius: 0.8rem 0 0 0.8rem;
    box-shadow: 0 0.2rem 0 0 #FFF500;

    font-size: 1.2rem;
  }

  > button {
    padding: 0.2rem 0.5rem;

    border: 0.15rem solid #7C00F3;
    border-left: 0;
    border-radius: 0 0.8rem 0.8rem 0;
    box-shadow: 0.2rem 0.2rem 0 0 #FFF500;

    position: relative;
  }

  @media (min-width:700px) {
      display: flex;
    }
`;
export const SearchIcon = styled(Search)`
  width: 1.6rem;
`;

