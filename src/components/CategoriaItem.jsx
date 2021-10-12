import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Titulo = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
`
function CategoriaItem({item}) {
    return (
        <Container>
            <Imagem src={item.img}></Imagem>
            <Info>
                <Titulo>{item.title}</Titulo>
                <Button>Comprar Agora</Button>
            </Info>
        </Container>
    )
}

export default CategoriaItem
