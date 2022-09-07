import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
        
    }

    body {
      font-family: 'Lato', sans-serif;
    }

    ul {
      list-style: none;
    }
`;