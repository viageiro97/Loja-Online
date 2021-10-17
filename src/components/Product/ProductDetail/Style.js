import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    padding: 40px 0;
    @media (max-width: 768px) {
        padding: 40px 25px;
    }
`
export const SubTitle = styled.h3`
    font-size: 0.875rem;
    margin-bottom: 10px;
    color: ${({theme})=>theme.color.orange};
`
export const Title = styled.h1`
    font-size: 2.4rem;
    margin-bottom: 25px;
`
export const PriceDetails = styled.div`
    margin-top: 15px;
`
export const Price = styled.p`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({theme})=>theme.color.veryDarkBlue};
    margin-bottom: 5px;
    span{
        display: inline-block;
        margin-left:14px;
        font-size: 1rem;
        color: ${({theme})=>theme.color.orange};
        background: ${({theme})=>theme.color.paleOrange};
        padding:2px 5px;
        border-radius: ${({theme})=>theme.radius};
    }
`
export const OldPrice = styled.p`
    color: ${({theme})=>theme.color.grayishBlue};
    text-decoration: line-through;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    @media (max-width: 576px) {
        flex-direction: column;
    }
`
export const CartAmount = styled.div`
    background: ${({theme})=>theme.color.lightGrayishBlue};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 10px;
    border-radius: ${({theme})=>theme.radius};
    min-width: 140px;
    margin-right: 25px;
    @media (max-width: 576px) {
        margin-right: 0;
        margin-bottom: 20px;
    }
`
export const IncDecBtn = styled.button`
    color: ${({theme})=>theme.color.orange};
    cursor: pointer;
    border: none;
    background: none;
`
export const Amount = styled.span`
    font-weight: 700;
    display: inline-block;
`
export const AddToCartBtn = styled.button`
    transition: all 400ms ease;
    flex: 1;
    cursor: pointer;
    background: ${({theme})=>theme.color.orange};
    border-radius: ${({theme})=>theme.radius};
    border: none;
    color: white;
    padding: 8px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        margin-right: 12px;
    }
    box-shadow: ${({theme})=>theme.shadow1};
    &:hover{
        opacity: 0.8;
    }
`