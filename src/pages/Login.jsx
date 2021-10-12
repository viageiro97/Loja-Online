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
    width: 25%;
`

const Titulo = styled.h1`
    font-size: 24px;
    //text-transform: uppercase;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    margin-bottom: 10px;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`
function Login() {
    return (
        <Container>
            <Wrapper>
                <Titulo>Entrar</Titulo>
                <Form>
                    <Input placeholder="Nome de utilizador"/>
                    <Input placeholder="Senha"/>
                    <Button>Entrar</Button>
                    <Link>Nao se lembra da sua senha?</Link>
                    <Link>Criar Nova Conta</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
