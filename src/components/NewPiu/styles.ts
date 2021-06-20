import styled from "styled-components";


export const NewPiuWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  background-color: white;
  border: 0.15rem solid var(--purple);
  border-radius: 0.5rem;

  box-shadow: 0 0 1.6rem 0.1rem rgba(0, 0, 0, 0.25);

  width: 100%;

  padding: 1rem;

  @media (min-width: 500px) {
    height: 10rem;
  }
  @media (min-width: 800px) {
    height: 11rem;
  }
  @media (min-width: 1200px) {
    height: 13rem;

    padding: 1.5rem;
  }

  > img {
    width: 4rem;

    border: 0.15rem solid #7C00F3;
    border-radius: 50%;

    @media (min-width: 500px) {
      width: 4.3rem;
    }
    @media (min-width: 800px) {
      width: 4.6rem;
    }
    @media (min-width: 1200px) {
      width: 5.2rem;
    }
  }

  > button {
    padding: 0.5rem 1.2rem;
    background: var(--purple);

    box-shadow: 0.1rem 0.1rem 0 0.1rem var(--yellow);
    border-radius: 5px;

    font-family: 'Poppins', 'Helvetica', Arial, sans-serif;
    font-size: 1rem;
    color: var(--yellow);
    text-shadow: 0.1rem 0.1rem 0 #000000;

    cursor: pointer;

    &:hover {
      background: var(--darker-purple);
    }

    @media (min-width: 500px) {
      padding: 0.5rem 1.5rem;

      font-size: 1.1rem;
    }
    @media (min-width: 800px) {
      padding: 0.5rem 2rem;

      font-size: 1.3rem;
    }
    @media (min-width: 1200px) {
      padding: 0.5rem 2.5rem;

      font-size: 1.6rem;
    }
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  margin: 0 1.5rem;
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;

  resize: none;

  padding: 1rem;

  font-size: 1rem;

  outline: auto;
  overflow-y: auto;

  @media (min-width: 500px) {
    font-size: 1.1rem;
  }
  @media (min-width: 800px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.4rem;
  }
`;
export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  > span {
    font-size: 0.9rem;

    @media (min-width: 500px) {
      font-size: 1rem;
    }
    @media (min-width: 800px) {
      font-size: 1.1rem;
    }
    @media (min-width: 1200px) {
     font-size: 1.2rem;
    }
  }
`;

export const CounterValue = styled.p`
  font-size: 1rem;
  color: red;

  @media (min-width: 500px) {
    font-size: 1.1rem;
  }
  @media (min-width: 800px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1200px) {
  font-size: 1.4rem;
  }
`;