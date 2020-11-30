import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100vh;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    background: ${(props) => props.theme.colors.backgrounds.home};
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.font.font1.book};
    color: ${(props) => props.theme.colors.textPrimary.main};
    font-size: 18px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.font.font1.hvy};
    color: ${(props) => props.theme.colors.textPrimary.main};
  }
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-family: ${(props) => props.theme.font.font1.demi};
    font-size: 28px;
  }
  h4 {
    font-size: 24px;
  }
  h5 {
    font-size: 20px;
  }
  h6 {
    font-size: 16px;
    font-family: ${(props) => props.theme.font.font1.demi};
  }
  a {
    font-family: ${(props) => props.theme.font.font1.book};
    font-size: 17px;
    color: ${(props) => props.theme.colors.textPrimary.main};
    text-decoration: none;
  }
`;

export default GlobalStyle;
