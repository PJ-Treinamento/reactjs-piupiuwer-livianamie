import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, border-style, #root {
    max-height: 100vh;
    max-width: 100vw;
    
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Poppins', 'Helvetica', Arial, sans-serif;
  }
  html {
    background: #EAC9FF;

    font-size: 10px;
  }
  :root {
    --purple: #7C00F3;
    --lighter-purple: #EAC9FF;
    --darker-purple: #9E00FF;
    --yellow: #FFF500;
  }
`;