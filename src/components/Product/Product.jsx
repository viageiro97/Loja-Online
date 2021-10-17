import React, { useState } from 'react'

import LigthBox from '../LightBox/LigthBox'
import ProductImages from '../../components/Product/ProductImages/ProductImages'
import ProductDetails from '../Product/ProductDetail/ProductDetails'

//Temporary Local Data
import { singleProduct } from '../../Data'

import { ImageShowContextProvider } from '../../Context/ImageShowContext'
import {Container,Left,Right} from './Style'


function Product() {
    const [product, setProduct] = useState(singleProduct);

    return (
        <Container>
            <Left>
                <ImageShowContextProvider>
                    <LigthBox images={product.images}/>
                    <ProductImages className="images" images={product.images}/>
                </ImageShowContextProvider>
                
            </Left>
            <Right>
                <ProductDetails productData={product} className="product-details"/>
            </Right>
        </Container>
    )
}

export default Product
