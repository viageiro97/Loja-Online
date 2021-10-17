import styled from 'styled-components'

export const Container = styled.div`
`
export const Arrow = styled.button`
    display: ${({arrow})=>arrow?"flex":"none"};
    z-index: 2;

    @media (max-width: 768px) {
        display: flex;
        left: ${({prev})=>prev&&"40px"};
        right: ${({next})=>next&&"40px"};
    }
    align-items: center;
    justify-content: center;
    transition: all 400ms ease;
    position: absolute;
    background: white;
    box-shadow: ${({theme})=>theme.shadow1};
    transform: translate(${({prev})=>prev?"-50%,-50%":"50%,-50%"});
    top: 50%;
    left: ${({prev})=>prev&&0};
    right: ${({next})=>next&&0};
    width: 45px;
    height: 45px;
    color: ${({theme})=>theme.color.veryDarkBlue};
    border-radius: 50%;
    cursor: pointer;
    border: none;

    &:hover{
        color:${({theme})=>theme.color.orange};
    }
`

export const SelectedImageContainer = styled.div`
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 450px;
    border-radius: ${({theme})=>theme.radius};
    @media (max-width: 768px) {
        border-radius: 0;
    }

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: ${({theme})=>theme.radius};
        background: ${({theme})=>theme.color.paleOrange};
        opacity:0;
    }

    &:hover{
        &::before{
            opacity: 0.08;
        }
    }
`
export const LightBoxTrigger = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @media (max-width: 576px) {
        display: none;
    }
`
export const SelectedImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({theme})=>theme.radius};
    @media (max-width: 768px) {
        border-radius: 0;
    }
`

export const ThumbsList = styled.div`
    margin-top: 20px;
    width: 100%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4,1fr);

    @media (max-width: 768px) {
        display: none;
    }

`
export const Thumb = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: none;
    border-radius: ${({theme})=>theme.radius};

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: ${({theme})=>theme.radius};
        background: ${({theme})=>theme.color.paleOrange};
        opacity: ${({actual})=>actual?0.65:0};
    }

    &:hover{
        &::before{
            opacity: 0.3;
        }
    }

`
export const ThumbImage = styled.img`
    width: 100%;
    border-radius: ${({theme})=>theme.radius};
`