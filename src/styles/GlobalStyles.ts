import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background: #E5E5E5;
        color: #000;
        font-family: Roboto, Arial, Helvetica, sans-serif;
    }

    button {
      cursor: pointer;
    }
`;
