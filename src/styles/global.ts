import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body
  {
    background-color: ${props => props.theme.baseBackground};
    color: ${props => props.theme.baseText}
  }

  body, input, button, a
  {
    font-family: "Nunito", sans-serif;
  }
`

