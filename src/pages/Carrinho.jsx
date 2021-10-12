import { Button } from '@material-ui/core'
import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Avisos from '../components/Avisos'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 20px;
`
const Titulo = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Topo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopoButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${({estilo})=>estilo ==="preenchido" && "none"};
    background-color: ${({estilo})=>estilo ==="preenchido"?"black":"transparent"};
    color: ${({estilo})=>estilo ==="preenchido" && "white"};
`
const TopoTextos = styled.div`
`
const TopoTexto = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`
const Abaixo = styled.div`
    display: flex;
`
const Info = styled.div`
    flex: 3;
`

const Produto = styled.div`
    display: flex;
    justify-content: space-between;
`
const DetalhesProduto = styled.div`
    flex: 2;
    display: flex;
`
const Imagem = styled.img`
    width: 200px;
`
const Detalhes = styled.div`
    outline: solid;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const NomeProduto = styled.span``
const IdProduto = styled.span``
const CorProduto = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({color})=>color};
`
const TamanhoProduto = styled.div``
const DetalhesPreco = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const QuantidadeProdutosContainer = styled.div`
    display: flex;
    align-items: center;
`
const Quantidade = styled.span`
    font-size: 24px;
    margin: 5px;
`
const PrecoProduto = styled.span`
    font-size: 30px;
    font-weight: 200;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Sumario = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
`

const TituloSumario = styled.h1`

`
const SumarioItem = styled.div`
`
const SITexto = styled.span`

`
const SIPreco = styled.span`

`

function Carrinho() {
    return (
        <Container>
            <Avisos/>
            <NavBar/>
            <Wrapper>
                 <Titulo>Suas Compras</Titulo>
                 <Topo>
                     <TopoButton>Continuar a comprar</TopoButton>
                     <TopoTextos>
                         <TopoTexto>Pasta de Compras (2)</TopoTexto>
                         <TopoTexto>Lista de desejos (0)</TopoTexto>

                     </TopoTextos>
                     <TopoButton estilo="preenchido">Efectuar pagamento</TopoButton>
                 </Topo>
                 <Abaixo>
                     <Info>
                         <Produto>
                             <DetalhesProduto>
                                 <Imagem src="https://www.pngfind.com/pngs/m/424-4246139_vestido-renda-vestido-de-renda-png-transparent-png.png"></Imagem>
                                 <Detalhes>
                                     <NomeProduto><b>Produto: </b>JESSIE THUNDER SHOES</NomeProduto>
                                     <IdProduto><b>Id: </b>931294995</IdProduto>
                                     <CorProduto color="black"/>
                                     <TamanhoProduto><b>Id: </b>39</TamanhoProduto>
                                 </Detalhes>
                             </DetalhesProduto>
                             <DetalhesPreco>
                                 <QuantidadeProdutosContainer>
                                     <Add/>
                                     <Quantidade>2</Quantidade>
                                     <Remove/>
                                 </QuantidadeProdutosContainer>
                                 <PrecoProduto>30,00 MT</PrecoProduto>
                             </DetalhesPreco>
                         </Produto>
                         
                         <Hr/>

                         <Produto>
                             <DetalhesProduto>
                                 <Imagem src="http://www.twacamisaria.com.br/vitrine/fotosproduto/66/2014101310753-camisete2.png"></Imagem>
                                 <Detalhes>
                                     <NomeProduto><b>Produto: </b>CAMISTE POLO LEVIS</NomeProduto>
                                     <IdProduto><b>Id: </b>931294995</IdProduto>
                                     <CorProduto color="gray"/>
                                     <TamanhoProduto><b>Tamanho: </b>39</TamanhoProduto>
                                 </Detalhes>
                             </DetalhesProduto>
                             <DetalhesPreco>
                                 <QuantidadeProdutosContainer>
                                     <Add/>
                                     <Quantidade>2</Quantidade>
                                     <Remove/>
                                 </QuantidadeProdutosContainer>
                                 <PrecoProduto>30,00 MT</PrecoProduto>
                             </DetalhesPreco>
                         </Produto>
                     </Info>
                     <Sumario>
                         <TituloSumario>Resumo do pedido</TituloSumario>
                         <SumarioItem>
                             <SITexto>Subtotal</SITexto>
                             <SIPreco>9580,00 MT</SIPreco>
                         </SumarioItem>
                         <SumarioItem>
                             <SITexto>Custo de entrega estimado</SITexto>
                             <SIPreco>180,00 MT</SIPreco>
                         </SumarioItem>
                         <SumarioItem>
                             <SITexto>Desconto de entrega</SITexto>
                             <SIPreco>-10,00 MT</SIPreco>
                         </SumarioItem>
                         <SumarioItem>
                             <SITexto tipo="total">Total</SITexto>
                             <SIPreco>9800,00 MT</SIPreco>
                         </SumarioItem>
                         <Button>Proceder pagamento</Button>
                     </Sumario>
                 </Abaixo>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Carrinho
