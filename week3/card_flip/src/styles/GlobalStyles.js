import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing : border-box;
    max-width: 86rem;
    margin: 4rem auto;
  }
  html {
    font-size: 62.5%;
  }
  body{
    font-family: 'Nanum Pen Script', cursive;
  }
`;
