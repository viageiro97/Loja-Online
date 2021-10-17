import styled from 'styled-components'
import { Overllay } from '../../styles/GlobalStyles'

export const Container = styled.div`
    display: ${({open})=>open?"flex":"none"};
    z-index: 30;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    color: white;
    flex-direction: column;
    justify-content: center;

    ${Overllay}{
        z-index: 12;
    }
`
export const LBoxWrapper = styled.div`
    z-index:13;
    max-width: 400px;
    margin: 0 auto;
`
export const CloseBtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const CloseBtn = styled.button`
    margin-left: auto;
    background: none;
    cursor: pointer;
    border: none;
    color: ${({theme})=>theme.color.orange};
    margin-bottom: 15px;
`