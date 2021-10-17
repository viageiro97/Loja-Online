import React, { useEffect, useState } from 'react'

import LigthBox from '../LightBox/LigthBox'
import ProductImages from '../../components/Product/ProductImages/ProductImages'
import ProductDetails from '../Product/ProductDetail/ProductDetails'

//Temporary Local Data
import { singleProduct } from './data'

import { ImageShowContextProvider } from '../../Context/ImageShowContext'
import {Container,Left,Right} from './Style'


function Product() {
    //Temporario ate o desenvolvimento da API
    const product = singleProduct;
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
