import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body, html, #root{
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }
`;