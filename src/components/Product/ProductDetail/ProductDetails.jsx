import { Add, Remove, ShoppingCartOutlined } from '@material-ui/icons'
import React, { useContext, useState } from 'react'
import GlobalContext from '../../../Context/GlobalContext'
import { toMetical } from '../../../Utils/Fuctions'

import{
    Container,
    SubTitle,
    Title,
    PriceDetails,
    Price,
    OldPrice, 
    Buttons,
    CartAmount,
    IncDecBtn,
    Amount,
    AddToCartBtn
} from './Style'

function ProductDetails({className, productData}) {

    const {
        id,
        images,
        itemName,
        description,
        price,
        oldPrice
    } = productData

    const [quant, setQuant] = useState(0);
    const {dispatch} = useContext(GlobalContext)
    
    function handleSubmit(){
        const newProduct = {
            id: id,
            image: images[0].thumb,
            itemName: itemName,
            price: price,
            quant: quant,
            total: price*quant,
        }

        setQuant(0);
        dispatch({type:'ADD_ITEM', payload: newProduct})
    }
    return (
        <Container className={className}>
            <SubTitle>MUNDO DAS SNEAKERS</SubTitle>
            <Title>{itemName}</Title>
            <p>{description}</p>
            <PriceDetails>
                <Price>{toMetical(price)}<span>50%</span></Price>
                <OldPrice>{toMetical(oldPrice)}</OldPrice>
            </PriceDetails>

            <Buttons>
                <CartAmount>
                    <IncDecBtn 
                        onClick={()=>{quant>0&&setQuant(quant-1)}}
                    >
                        <Remove/>
                    </IncDecBtn>
                        <Amount>{quant}</Amount>
                    <IncDecBtn
                        onClick={()=>{setQuant(quant+1)}}
                    >
                        <Add/>
                    </IncDecBtn>
                </CartAmount>
                <AddToCartBtn onClick={handleSubmit}>
                    <ShoppingCartOutlined/>
                    Adicionar ao Carrinho
                </AddToCartBtn>
            </Buttons>
        </Container>
    )
}

export default ProductDetails
