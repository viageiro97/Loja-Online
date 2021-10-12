import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Titulo = styled.h1`
    font-size: 50px;
    margin-bottom: 20px;
`
const Descricao = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const ContainerInput = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`
function Newsletter() {
    return (
        <Container>
            <Titulo>Boletim Informativo</Titulo>
            <Descricao>Obtenha actualizacoes em tempo real dos seus productos favoritos</Descricao>
            <ContainerInput>
                <Input placeholder="Seu e-mail"/>
                <Button>
                    <Send/>
                </Button>
            </ContainerInput>
        </Container>
    )
}

export default Newsletter
