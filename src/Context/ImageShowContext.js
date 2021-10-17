import React from 'react'
import { createContext, useState } from "react";

const ImageShowContext = createContext();


export function ImageShowContextProvider({children}) {

    const [selectedImg, setSelectedImg] = useState(0);
    const [isLightBoxOpen, setIsLigthBoxOpen] = useState(false);

    return (
        <ImageShowContext.Provider value={
            {
                selectedImg,
                setSelectedImg,
                isLightBoxOpen,
                setIsLigthBoxOpen
            }
            }
        >
            {children}
        </ImageShowContext.Provider>
    )
}

export default ImageShowContext
