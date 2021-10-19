import React, { useContext, useState } from 'react'
import { Avatar, Badge} from '@material-ui/core';
import { 
    CloseOutlined, 
    MenuOutlined, 
    ShoppingCartOutlined 
} from '@material-ui/icons';

import logotipo from '../../images/logo.svg';
import avatar from '../../images/profile.jpg';
import { Overllay, Wrapper } from '../../styles/GlobalStyles';
import Cart from '../Cart/Cart';
import GlobalContext from '../../Context/GlobalContext';

import {
    Container, 
    MenuBtn, 
    Logo, 
    Nav,
    RightSide,
    Button
} from '../Navbar/Style'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const {state} = useContext(GlobalContext);
    const cartNum = state.cart.reduce((sum, val)=>{
        return sum + val.quant
    },0)
    
    return (
        <Container>
            {isMenuOpen&&<Overllay onClick={()=>setIsMenuOpen(false)}/>}
            <Wrapper className="navBarWrapper">
                {isCartOpen&&<Cart setIsOpen={setIsCartOpen}/>}
                <MenuBtn onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                    <MenuOutlined/>
                </MenuBtn>
                <Logo>
                    <img src={logotipo} alt="Sneakers Logo" />
                </Logo>
                <Nav open={isMenuOpen}>
                    <MenuBtn onClick={()=>setIsMenuOpen(false)}>
                        <CloseOutlined/>
                    </MenuBtn>

                    <ul>
                        <li><a href="/">Colecções</a></li>
                        <li><a href="/">Homem</a></li>
                        <li><a href="/">Mulher</a></li>
                        <li><a href="/">Sobre</a></li>
                        <li><a href="/">Contacto</a></li>
                    </ul>
                </Nav>
                <RightSide>
                    <Button onClick={()=>setIsCartOpen(!isCartOpen)}>
                        <Badge color="secondary" badgeContent={cartNum}>
                            <ShoppingCartOutlined />
                        </Badge>
                    </Button>
                    
                    <Button className="avatar-btn">
                        <Avatar className="avatar" alt="Victor Viageiro" src={avatar} />
                    </Button>
                </RightSide>
        
            </Wrapper>
        </Container>
    )
}

export default Navbar
