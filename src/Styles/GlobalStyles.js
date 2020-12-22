import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  html, body {
    font-size: 10px;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
    background-color: #2B2B2B;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
