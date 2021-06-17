import styled from "styled-components";

export const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 2rem;

  background-color: white;
  border: 0.15rem solid var(--purple);
  border-radius: 0.5rem;

  box-shadow: 0 0 1.6rem 0.1rem rgba(0, 0, 0, 0.25);
`;
export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-bottom: 0.1rem solid var(--darker-purple);

  width: 100%;

  > p {
    width: fit-content;
    height: 100%;

    color: var(--darker-purple);
    font-size: 1rem;
    font-weight: bold;

    padding: 0.5rem 1.2rem;

    cursor: pointer;

    &:hover {
      background-color: var(--lighter-purple);
    }

    @media (min-width: 500px) {
      font-size: 1.1rem;
    }
    @media (min-width: 800px) {
      font-size: 1.2rem;
    }
    @media (min-width: 1200px) {
     font-size: 1.4rem;

     padding: 0.7rem 1.6rem;
    }
  }

  > p#pius-section {
    color: var(--yellow);
    text-shadow: 0.1rem 0.1rem 0 var(--darker-purple);

    background-color: var(--purple);
    border-right: var(--darker-purple) solid 0.1rem;
  }
`;
