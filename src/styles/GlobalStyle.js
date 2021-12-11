import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    position: relative;
    width: 100vw;
    box-sizing: border-box;
    font-family: montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    margin: 0px;
  }
  
  ${
    '' /* h1, h2, h3 {
    text-align: center;
  } */
  }
  a, a:visited {
    text-decoration: none;
  }
  
  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
  li {
    margin-bottom: 0.5em;
  }

  select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    &:required:invalid {
      color: grey;
    }
  }

  button, input, select, textarea {
    font-size: 0.73em;
  }
`;

// body::before {
//   position: absolute;
//   top: 80px;
//   ${"" /* left: 50%; */}
//   width: 100%;
//   height: 100%;
//   content: '';
//   background-image: url(${globeBg});
//   background-repeat: no-repeat;
//   background-attachment: fixed;
//   background-size: contain;
//   background-position: right top;
//   opacity: 0.1;
//   z-index: -1;
// }

export default GlobalStyle;
