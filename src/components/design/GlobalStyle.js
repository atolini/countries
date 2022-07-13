import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    h1,
    * { 
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        font-size: 16px; 
    }

    body { 
      display: flex; 
      flex-flow: column nowrap; 
      align-items: center;
      background-color: ${props => props.theme.bgBodyColor}; 
    }
`; 

export default GlobalStyle