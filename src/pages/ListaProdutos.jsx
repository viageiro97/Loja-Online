import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Avisos from '../components/Avisos'
import Produtos from '../components/Produtos'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Container = styled.div`
`
const Titulo = styled.h2`
    margin: 20px;
`
const ContainerFiltros = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filtro = styled.div`
    margin: 20px;
`
const TextoFiltro = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;

`
const Option = styled.option`
`
function ListaProdutos() {
    return ( 
        <Container>
            <Avisos/>
            <NavBar/>
            <Titulo>Vestidos</Titulo>
            <ContainerFiltros>
                <Filtro>
                    <TextoFiltro>Filtrar Productos</TextoFiltro>
                    <Select>
                        <Option disabled selected>Cor</Option>
                        <Option>Branco</Option>
                        <Option>Preto</Option>
                        <Option>Vermelho</Option>
                        <Option>Azul</Option>
                        <Option>Amarelo</Option>
                        <Option>Verde</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Tamanho</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                    
                </Filtro>
                <Filtro>
                    <TextoFiltro>Ordenar Productos</TextoFiltro>
                    <Select>
                        <Option disabled selected>Preco</Option>
                        <Option>Preco (asc)</Option>
                        <Option>Preco (dec)</Option>
                    </Select>
                </Filtro>
            </ContainerFiltros>
            <Produtos/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ListaProdutos
