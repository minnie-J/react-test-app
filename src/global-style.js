import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import "antd/dist/antd.css";
import "./assets/fonts/font.css";
import "./assets/css/checkbox.css";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100%;
    /* background-color: rgba(77, 74, 108, 0.03); */
    color: #354053;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 12px;
    font-weight: 400;
    overflow: hidden;

    /* user-select: none; */
  }

  div, p, span, a {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 12px;
  }

  /* table, thead, tbody, tr, td, th {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 12px;
  } */
`;

export default GlobalStyle;
