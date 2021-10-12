import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Avisos from '../components/Avisos'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'

const Container = styled.div`
`
const ContainerImagem = styled.div`
    flex: 1;
`
const Imagem = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const ContainerInfo = styled.div`
    flex: 1;
    padding: 0 50px;
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const Titulo = styled.h1`
    font-weight: 200;
`
const Descricao = styled.p`
    margin: 20px 0;
`
const Preco = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const ContainerFiltros = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`
const Filtro = styled.div`
    display: flex;
    align-items: center;
`
const TituloFiltro = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const CorFiltro = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({color})=>color};
    margin: 0 5px;
    cursor: pointer;
`
const TamanhoFiltro = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const TFOption = styled.option`
`
const ContainerAdicionar = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ContainerQuant = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Quantidade = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    text-transform: uppercase;
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

function Produto() {
    return (
        <Container>
            <Avisos/>
            <NavBar/>
            <Wrapper>
                <ContainerImagem>
                    <Imagem src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
                </ContainerImagem>
                <ContainerInfo>
                    <Titulo>Jacketa DenimJam</Titulo>
                    <Descricao>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cum molestiae commodi nobis, voluptas dolorum! Omnis, ducimus ipsum qui quibusdam maiores unde eaque suscipit porro dolores dicta numquam quo neque.</Descricao>
                    <Preco>270,00 MT</Preco>

                    <ContainerFiltros>
                        <Filtro>
                            <TituloFiltro>Cor</TituloFiltro>
                            <CorFiltro color="black"/>
                            <CorFiltro color="darkblue"/>
                            <CorFiltro color="gray"/>
                        </Filtro>
                        <Filtro>
                            <TituloFiltro>Tamanho</TituloFiltro>
                            <TamanhoFiltro>
                                <TFOption>XS</TFOption>
                                <TFOption>S</TFOption>
                                <TFOption>M</TFOption>
                                <TFOption>L</TFOption>
                                <TFOption>XL</TFOption>
                            </TamanhoFiltro>
                        </Filtro>
                    </ContainerFiltros>
                    <ContainerAdicionar>
                        <ContainerQuant>
                            <Remove/>
                            <Quantidade>1</Quantidade>
                            <Add/>
                        </ContainerQuant>
                        <Button>Adicionar ao Carrinho</Button>
                    </ContainerAdicionar>
                </ContainerInfo>
            </Wrapper>
            <Newsletter/>
            <Footer/>

        </Container>
    )
}

export default Produto
