import React from 'react'
import styled from 'styled-components'

import {MailOutline, Menu, Search, ShopOutlined, ShoppingBasketOutlined, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Esquerda = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Lingua = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const PesquisaContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

`
const Input = styled.input`
    border: none;
`
const Centro = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Direita = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const ItemMenu = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`
function NavBar() {
    return (
        <Container>
            <Wrapper>
                <Esquerda>
                    <Lingua>EN</Lingua>
                    <PesquisaContainer>
                        <Input/>
                        <Search style={{color:"gray", fontSize:16}}/>
                    </PesquisaContainer>
                </Esquerda>
                <Centro>
                    <Logo>VFVA.</Logo>
                </Centro>
                <Direita>
                    <ItemMenu>Registar-se</ItemMenu>
                    <ItemMenu>Entrar</ItemMenu>
                    <ItemMenu>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </ItemMenu>
                </Direita>
            </Wrapper>
        </Container>
    )
}

export default NavBar
