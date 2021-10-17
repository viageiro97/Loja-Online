import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    z-index:3;
    top: 80%;
    right: 20px;
    width: 360px;
    padding-bottom: 22px;
    border-radius: 5px;
    background: ${({theme})=>theme.color.white};
    box-shadow: ${({theme})=>theme.shadow1};

    @media (max-width: 576px) {
        top: 120%;
        left: 5%;
        width: 90%;
    }

`
export const Header = styled.div`
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({theme})=>theme.color.grayishBlue};
`
export const Title = styled.h3`
    height: 55px;
    display: flex;
    align-items: center;
`

export const Body= styled.div`
    padding: 0 15px;
`
export const ItemList = styled.div`
    padding-top: 22px;
`
export const EmptyCart = styled.p`
    font-weight: 700;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ButtonCheckout = styled.button`
    cursor: pointer;
    color: white;
    width: 100%;
    padding: 12px 5px;
    border: none;
    border-radius: ${({theme})=>theme.radius};
    background: ${({theme})=>theme.color.orange};
    box-shadow: ${({theme})=>theme.shadow1};
    &:hover{
        opacity: 0.8;
    }
`
export const CloseCartBtn = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    svg{
        color: ${({theme})=>theme.color.darkGrayishBlue}
    }`
