import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import Product from '../components/Product/Product'
import SnackBar from '../components/SnackBar'

const Container = styled.div`

`

function ProductPage (){

    return(
        <Container>
            <Navbar/>
            <Product/>
            <SnackBar/>
        </Container>        
    )
}

export default ProductPage
