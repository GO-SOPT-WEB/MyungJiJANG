import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing : border-box;
    max-width: 100%;
    margin: 4rem auto;
    background-color: ${(props) => props.theme.backBlue};
  }
  html {
    font-size: 62.5%;
  }
  body{
    font-family: 'Nanum Pen Script', cursive;
  }
`;
