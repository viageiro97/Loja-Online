import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    .navBarWrapper{
        min-height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid ${({theme})=>theme.color.grayishBlue};
    }
`

export const MenuBtn = styled.button`
    svg{
        font-size: 1.6rem;
        color: ${({theme})=>theme.color.darkGrayishBlue}
    }
    margin-right: 10px;
    background: none;
    border: none;
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`
export const Logo = styled.div`
    margin-right: 40px;
`
export const Nav = styled.nav`
    @media (max-width: 768px) {
            transform: translateX(${({open})=>open?"0%":"-101%"});
            background: white;
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            width: 55vw;
            padding: 40px 40px;
            ul{
                margin-top: 25px;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                li+li{
                    margin-left: 0px !important;
                }
                li{
                    height: auto;
                    margin-bottom: 15px;
                    padding: 10px 0px;
                }
                a{
                    font-weight: 700;
                    color:${({theme})=>theme.color.veryDarkBlue}
                }
            }
        }
    
    //Navbar
    transition: all 600ms ease;
    z-index: 11;

    li{
        height: 90px;
    }


    ul{
        height: 100%;
        list-style: none;
        display: flex;
        li+li{
            margin-left: 35px;
        }
    }

    li{
        position: relative;
        //height: 100%;
        display: flex;
        align-items: center;
    }

    a{
        color: ${({theme})=>theme.color.darkGrayishBlue};
        transition: all 300ms ease;
    }

    a::before{
        transition: all 400ms ease;
        position: absolute;
        content: "";
        width: 100%;
        opacity: 0;
        height: 3px;
        bottom: 0;
        background:${({theme})=>theme.color.orange};
        box-shadow: ${({theme})=>theme.shadow1};
    }

    a:hover{
        color: ${({theme})=>theme.color.veryDarkBlue};
        &::before{
        opacity: 1;
        }
    }

    a{
        text-decoration: none;
        color: ${({theme})=>theme.color.darkGrayishBlue};
    }
`

export const RightSide = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export const Button = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    transition: all 300ms ease;

    .MuiBadge-root{
        span{
            background: ${({theme})=>theme.color.orange};
        }
    }
    &.avatar-btn{
        margin-left: 30px;
    }

    &:hover{
        transform: scale(1.05);
        .avatar{
            border: 2px solid ${({theme})=>theme.color.orange};
            box-shadow: ${({theme})=>theme.shadow1};
        }

    }
`
