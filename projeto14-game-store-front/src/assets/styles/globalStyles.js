import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box
    }

    body {
        background: #1D2033;
        font-family: 'Roboto', sans-serif;
        padding: 25px;
        margin: 0;
        overflow: hidden;
    }

    h1 {
        font-size: 64px;
        font-weight: 400;
        font-family: 'Titan One', cursive;
        color: #FFFFFF;
        margin-bottom: 28px; 
    }

    input {
        width: 100%;
        height: 58px;
        color: #4A5253;
        background-color: #141724;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        border: none;
        border-radius: 5px;
        margin-bottom: 13px;
        padding: 16px;
    }

    a {
        font-size: 15px;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        color: #FFFFFF;
        text-decoration: none;
        margin-top: 34px;
    }

    button {
        width: 100%;
        height: 46px;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        color: #908E97;
        background-color: #343647;
        border: none;
        border-radius: 5px;
        padding: 12px;
        cursor: pointer;
    }
`
export default GlobalStyle;