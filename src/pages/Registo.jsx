import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
     );
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
`

const Titulo = styled.h1`
    font-size: 24px;
    //text-transform: uppercase;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Acordo = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
`
function Registo() {
    return (
        <Container>
            <Wrapper>
                <Titulo>Criar uma conta</Titulo>
                <Form>
                    <Input placeholder="Nome"/>
                    <Input placeholder="Apelido"/>
                    <Input placeholder="Nome de Utilizador"/>
                    <Input placeholder="e-mail"/>
                    <Input placeholder="Senha"/>
                    <Input placeholder="Confirmar Senha"/>
                    <Acordo>
                        Ao criar uma conta, Eu concedo o direito de processamento das minhas informacoes pessoais, em acordo com a <b>Politica de privacidade</b>
                    </Acordo>
                    <Button>Criar</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Registo
