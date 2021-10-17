import React, { useContext } from 'react'
import { Close } from '@material-ui/icons'
import { Overllay } from '../../styles/GlobalStyles'
import ProductImages from '../Product/ProductImages/ProductImages'
import ImageShowContext from '../../Context/ImageShowContext'
import {
    Container, 
    LBoxWrapper, 
    CloseBtnContainer, 
    CloseBtn
} from './Syles'

function LigthBox({images}) {
    const {
        isLightBoxOpen, 
        setIsLigthBoxOpen
    } = useContext(ImageShowContext);

    return (
        <Container open={isLightBoxOpen?true:false}>
            <Overllay onClick={()=>setIsLigthBoxOpen(false)}/>
            <LBoxWrapper>
                <CloseBtnContainer>
                    <CloseBtn onClick={()=>setIsLigthBoxOpen(false)}>
                        <Close/>
                    </CloseBtn>
                </CloseBtnContainer>
                <ProductImages arrow={true} images={images}/>
            </LBoxWrapper>
        </Container>
    )
}

export default LigthBox
