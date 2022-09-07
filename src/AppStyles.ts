import { createGlobalStyle } from "styled-components";
import styled from "styled-components"
export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
        
    }

    body {
      background: #FFFFFF;
    }

    ul {
      list-style: none;
    }
`;

export const Container = styled.div`
  display: flex;
`