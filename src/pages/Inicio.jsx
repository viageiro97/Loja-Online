import React from 'react'
import Avisos from '../components/Avisos'
import Categorias from '../components/Categorias'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Produtos from '../components/Produtos'
import Slider from '../components/Slider'

function inicio() {
    return (
        <div>
            <Avisos/>
            <NavBar/>
            <Slider/>
            <Categorias/>
            <Produtos/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
 
export default inicio
