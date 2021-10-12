import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Esquerda = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
`
const Descricao = styled.p`
    margin: 20px 0px;
`
const RedesSociais = styled.div`
    display: flex;
`
const IconeRS = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${({color})=>color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Centro = styled.div`
    flex: 1;
    padding: 20px;
`
const Titulo = styled.h3`
    margin-bottom: 30px;
`
const Lista = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListaItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Direita = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactoItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center; 
`
const Pagamentos = styled.img`
    //width: 50%;
`
function Footer() {
    return (
        <Container>
            <Esquerda>
                <Logo>VFVA.</Logo>
                <Descricao>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae veritatis esse quisquam, accusantium molestias doloremque, omnis perferendis eaque voluptatibus quod vitae debitis dicta enim? Ut incidunt reprehenderit provident eveniet animi doloribus dolorem ab voluptate placeat culpa! Fugit dignissimos non, tempora hic nulla quos ipsum ratione rem facilis accusantium doloribus numquam exercitationem labore illum. Eligendi reiciendis in adipisci ipsum? Vel.
                </Descricao>
                <RedesSociais>
                    <IconeRS color="#3B5999">
                        <Facebook/>
                    </IconeRS>
                    <IconeRS color="#E4405F">
                        <Instagram/>
                    </IconeRS>
                    <IconeRS color="#55ACEE">
                        <Twitter/>
                    </IconeRS>
                    <IconeRS color="#E60023">
                        <Pinterest/>
                    </IconeRS>
                </RedesSociais>
            </Esquerda>
            <Centro>
                <Titulo>Links Uteis</Titulo>
                <Lista>
                    <ListaItem>Inicio</ListaItem>
                    <ListaItem>Carrinho</ListaItem>
                    <ListaItem>Roupas Homens</ListaItem>
                    <ListaItem>Roupas Senhoras</ListaItem>
                    <ListaItem>Acessorios</ListaItem>
                    <ListaItem>Minha Conta</ListaItem>
                    <ListaItem>Acompanhar Encomenda</ListaItem>
                    <ListaItem>Lista de desejos</ListaItem>
                    <ListaItem>Termos e Condicoes</ListaItem>
                </Lista>
            </Centro>
            <Direita>
                <Titulo>Contactos</Titulo>
                <ContactoItem>
                    <Room style={{marginRight:"10px"}}/>
                    Vila Olimpica do Zimpeto, Zimpeto, Cidade Maputo
                </ContactoItem>
                <ContactoItem>
                    <Phone style={{marginRight:"10px"}}/>
                    +258 842451292
                </ContactoItem>
                <ContactoItem>
                    <MailOutline style={{marginRight:"10px"}}/>
                    victorviageiro@gmail.com
                </ContactoItem>
                <Pagamentos src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Direita>
        </Container>
    )
}

export default Footer
