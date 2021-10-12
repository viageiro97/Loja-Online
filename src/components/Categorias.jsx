import React from 'react'
import styled from 'styled-components'

import { categories } from '../data'
import CategoriaItem from './CategoriaItem'
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`
function Categorias() {
    return (
        <Container>
            {
                categories.map((item)=>
                <CategoriaItem item={item}/>)
            }
        </Container>
    )
}

export default Categorias
