import styled from "styled-components";

import { Earlybirds } from '../../styles/Icons';


export const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  > strong {
    font-size: 1.4rem;

    color: var(--darker-purple);
    text-shadow: 1px 1px var(--yellow);

    margin-bottom: 3rem;

    @media (min-width: 500px) {
      font-size: 1.6rem;
    }
    @media (min-width: 800px) {
      font-size: 1.7rem;
    }
    @media (min-width: 1200px) {
      font-size: 1.9rem;
    }
  }

  > button {
    padding: 0.5rem 1.5rem;
    margin-top: 2rem;
    background: var(--purple);

    box-shadow: 0.1rem 0.1rem 0 0.1rem var(--yellow);
    border-radius: 5px;

    font-family: 'Poppins', 'Helvetica', Arial, sans-serif;
    font-size: 1.2rem;
    color: var(--yellow);
    text-shadow: 0.1rem 0.1rem 0 #000000;

    cursor: pointer;

    &:hover {
      background: var(--darker-purple);
    }

    @media (min-width: 500px) {
      padding: 0.7rem 1.7rem;

      font-size: 1.3rem;
    }
    @media (min-width: 800px) {
      padding: 0.8rem 2.2rem;

      font-size: 1.5rem;
    }
    @media (min-width: 1200px) {
      padding: 0.9rem 2.7rem;

      font-size: 1.7rem;
    }
  }
`;
export const Logo = styled(Earlybirds)`
  width: 70px;
  flex-shrink: 0;

  color: var(--purple);

  margin-bottom: 3rem;

  @media (min-width: 500px) {
    width: 80px;
  }
  @media (min-width: 800px) {
    width: 90px;
  }
  @media (min-width: 1200px) {
    width: 110px;
  }
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > input {
    background-color: white;
    border: 1.5px solid var(--darker-purple);
    border-radius: 0.5rem;

    font-size: 1.1rem;

    width: 18rem;

    padding: 0.5rem;
    margin-bottom: 2rem;

    @media (min-width: 500px) {
      width: 22rem;

      padding: 0.5rem 0.7rem;

      font-size: 1.3rem;
    }
    @media (min-width: 800px) {
      width: 26rem;

      padding: 0.5rem 0.9rem;

      font-size: 1.5rem;
    }
    @media (min-width: 1200px) {
      width: 30rem;

      padding: 0.5rem 1.1rem;

      font-size: 1.7rem;
    }
  }
`;