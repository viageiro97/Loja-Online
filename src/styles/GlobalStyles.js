import styled, { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    max-width: 1140px;
    padding: 0 20px;
    margin: 0 auto;
`

export const Overllay = styled.div`
    z-index: 4;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: ${({theme})=>theme.color.blackTransparent};
`
export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        line-height: 1.4;
        font-size: 16px;
        font-family: ${({theme})=>`${theme.font.fam},${theme.font.fam2}`};
    }

    button{
        font-family: ${({theme})=>`${theme.font.fam},${theme.font.fam2}`};
    }

    p{
        color: ${({theme})=>theme.color.darkGrayishBlue};
    }

    h1,h3{
        color: ${({theme})=>theme.color.veryDarkBlue};
    }
`