import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import ProductoItem from './ProductoItem'
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
function Produtos() {
    return (
        <Container>
            {
                popularProducts.map((item)=>
                    <ProductoItem key={item.id} item={item}/>
                )
            }
        </Container>
    )
}

export default Produtos 
