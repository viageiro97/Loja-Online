import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500px;
`
function Avisos() {
    return (
        <Container>
            Super Oferta! Entrega gratis nas encomendas acima de 200,00MT
        </Container>
    )
}

export default Avisos
