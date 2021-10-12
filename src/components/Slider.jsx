import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data'

import imgCompras from '../images/image-from-rawpixel-id-2326692-original.png'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: ${({direction})=>direction === "left"&& "10px"};
    right: ${({direction})=>direction === "right"&& "10px"};
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${({slideIndex})=>slideIndex*-100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${({bg})=>bg};
`
const ContainerImagem = styled.div`
    height: 100%;
    flex: 1;
`
const Imagem = styled.img`
    height: 80%;
`
const ContainerInfo = styled.div`
    flex: 1;
    padding: 50px;
`
const Titulo = styled.h1`
    font-size: 70px;
`
const Descricao = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-transform: uppercase;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)
    function handleClick (direction){
        if(direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1:2)
        } else{
            setSlideIndex(slideIndex<2 ? slideIndex+1:0)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {
                    sliderItems.map((data)=>{
                        return(
                            <Slide key={data.id} bg={data.bg}>
                                <ContainerImagem>
                                    <Imagem src={data.img}></Imagem>
                                </ContainerImagem>
                                <ContainerInfo>
                                    <Titulo>{data.title}</Titulo>
                                    <Descricao>{data.desc}</Descricao>
                                    <Button>Comprar Agora</Button>
                                </ContainerInfo>
                            </Slide>
                        )
                    })
                }

            </Wrapper>
            
        </Container>
    )
}

export default Slider
