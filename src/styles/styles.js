import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:700&display=swap');
  #root {
    width: 100%;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  body {
    background-color: black;
    color: white;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-size: 0.9rem;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    background: rgba(0, 0, 0, 0.25);
    padding: 0.2rem 0.25rem;
    border-radius: 3px;
  }
  button {
    cursor: pointer;
  }
  body, input, button {
    font-size: 14px;
    font-family: 'Roboto', sans-serif, Helvetica;
    box-shadow: none;
  }
  span {
    font-family: 'Roboto', sans-serif, Helvetica;
  }
`;
