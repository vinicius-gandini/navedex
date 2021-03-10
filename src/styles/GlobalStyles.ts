import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
      font-family: Montserrat, Arial, Helvetica, sans-serif;
    }

    body {
        background: #fff;
        height: 100vh;
        color: #000;
    }

    button {
      cursor: pointer;
      background: transparent;
      border: none;
    }

    @media(max-width: 1080px) {
      html {
          font-size: 93.75%;
      }
    }

    @media(max-width: 720px) {
      html {
          font-size: 87.5%;
      }
    }
`;
