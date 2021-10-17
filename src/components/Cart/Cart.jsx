import React, { useContext } from 'react'
import { CloseOutlined } from '@material-ui/icons'
import {
    Container, 
    Header,
    Title, 
    CloseCartBtn,
    Body,
    ItemList,
    ButtonCheckout,
    EmptyCart
} from './CartStyles'
import CartItem from './CartItem/CartItem'
import GlobalContext from '../../Context/GlobalContext'


function Cart({setIsOpen}) {

    const {state,dispatch} = useContext(GlobalContext);
    const cart = state.cart

    return (
        <Container>
            <Header>
                <Title>Carrinho</Title>
                <CloseCartBtn onClick={()=>setIsOpen(false)}>
                    <CloseOutlined/>
                </CloseCartBtn>
            </Header>
            <Body>
                <ItemList>
                    {
                        cart.map((item)=>
                            <CartItem cartItem={item}/>
                            )
                    }

                </ItemList>
                {cart.length?
                <ButtonCheckout onClick={()=>dispatch({type:'NOT_IMPLEMENTED'})}>Processar</ButtonCheckout>: 
                <EmptyCart>Seu carrinho esta vazio</EmptyCart>               
                }
            </Body>
        </Container>
    )
}

export default Cart
