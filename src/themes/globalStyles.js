import { createGlobalStyle } from "styled-components";

//Mixins
import { scrollStyle } from "@Themes/mixins";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family:  ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  ${scrollStyle}
  } `;
