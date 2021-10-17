import React, { useContext } from 'react'
import { Delete } from '@material-ui/icons'
import { 
    Container, 
    Image, 
    Info, 
    ProductName, 
    QuantPriceDetails, 
    Button } from './CartItemStyle'
import GlobalContext from '../../../Context/GlobalContext'
import { toMetical } from '../../../Utils/Fuctions'


function CartItem({cartItem}) {
    const {dispatch} = useContext(GlobalContext)
    const {
        id,
        image, 
        itemName, 
        price, 
        quant, 
        total
    } = cartItem;

    return (
        <Container>
            <Image src={image}/>
            <Info>
                <ProductName>{itemName}</ProductName>
                <QuantPriceDetails>
                    {toMetical(price)} x {quant} <b>{toMetical(total)}</b>
                </QuantPriceDetails>
            </Info>
            <Button onClick={()=>dispatch({type:'REMOVE_ITEM', payload:id})}>
                <Delete/>
            </Button>
        </Container>
    )
}

export default CartItem
