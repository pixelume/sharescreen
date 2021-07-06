import { createGlobalStyle } from "styled-components";

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
  
  ${'' /* h1, h2, h3 {
    text-align: center;
  } */}
  a {
    text-decoration: none;
  }
  
  button {
    outline: none;
    border: none;
  }
  li {
    margin-bottom: 0.5em;
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
