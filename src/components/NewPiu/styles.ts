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

  > img {
    width: 4rem;

    border: 0.15rem solid #7C00F3;
    border-radius: 50%;
  }

  > button {
    padding: 0.5rem 1.2rem;
    background: var(--darker-purple);

    box-shadow: 0.1rem 0.1rem 0 0.1rem var(--yellow);
    border-radius: 5px;

    font-family: 'Poppins', 'Helvetica', Arial, sans-serif;
    font-size: 1rem;
    color: var(--yellow);
    text-shadow: 0.1rem 0.1rem 0 #000000;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;

  > textarea {
    width: 100%;
    height: 5rem;

    resize: none;

    padding: 1rem;

    font-size: 1rem;

    outline: none;
    overflow-y: auto;
  }
`;
export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 95%;
`;