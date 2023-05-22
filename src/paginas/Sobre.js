import React from 'react'
import Navegacao from '../componentes/Navegacao'
import ImagemCapas from '../componentes/ImagemCapas'
import Footer from '../componentes/Footer'
import SobreProjeto from '../componentes/Sobre'

const Sobre = () => {
  return (
    <div>
        <Navegacao />
        <ImagemCapas heading="Sobre o Projeto" text="Saiba mais sobre o nosso jogo"/>
        <SobreProjeto />
        <Footer />
    </div>
  )
}

export default Sobre