import {
    createGlobalStyle
} from "styled-components";

const GlobalStyles = createGlobalStyle `

    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        width:100%;
        height:100%;
        font-family:'Nunito Sans', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    li{
    list-style:none;
    }

`;

export default GlobalStyles