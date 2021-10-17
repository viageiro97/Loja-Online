import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
export const Image = styled.img`
    width: 50px;
    height: 55px;
    border-radius: ${({theme})=>theme.radius};
    object-fit: cover;
`

export const Info = styled.div`
    margin-left: 25px;
    flex: 1;
`
export const ProductName = styled.p`
    font-size: 0.9rem;
`
export const QuantPriceDetails = styled.p`
    font-size: 0.9rem;
`
export const Button = styled.button`
    margin-left: 10px;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({theme})=>theme.color.darkGrayishBlue};
`