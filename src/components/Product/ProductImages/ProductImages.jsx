import React, { useContext} from 'react'
import { ArrowBack, ArrowForward} from '@material-ui/icons'
import ImageShowContext from '../../../Context/ImageShowContext'
import {
    Container,
    LightBoxTrigger,
    Arrow,
    SelectedImage,
    ThumbsList,
    Thumb,
    ThumbImage,
    SelectedImageContainer
} from './Styles'

function ProductImages({images, className, arrow}) {

    const {
        selectedImg, 
        setSelectedImg, 
        setIsLigthBoxOpen
    } = useContext(ImageShowContext);

    function selectImage(direction){
        if(direction === "next"){
            setSelectedImg(selectedImg===images.length-1?0:selectedImg+1)
        }else{
            setSelectedImg(selectedImg===0?images.length-1:selectedImg-1)
        }
    }
    return (
        <Container className={className}>
            <SelectedImageContainer className="selected-image">
                <LightBoxTrigger onClick={()=>setIsLigthBoxOpen(true)}></LightBoxTrigger>
                <Arrow tabIndex="0" role="button" arrow={arrow} prev onClick={()=>selectImage("prev")}>
                    <ArrowBack/>
                </Arrow>

                <Arrow arrow ={arrow} next onClick={()=>selectImage("next")}>
                    <ArrowForward/>
                </Arrow>
                <SelectedImage src={images[selectedImg].image}/>
            </SelectedImageContainer>
            <ThumbsList className="thumb-list">
                {
                    images.map((img)=>(
                        <Thumb
                            key={img.id}
                            onClick={()=>setSelectedImg(img.id-1)}
                            actual={selectedImg===img.id-1?true:false}
                        >
                            <ThumbImage src={img.thumb}/>
                        </Thumb>
                    ))
                }
            </ThumbsList>
        </Container>
    )
}

export default ProductImages
