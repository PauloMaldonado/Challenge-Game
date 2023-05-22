import React from 'react'
import Navegacao from '../componentes/Navegacao'
import Footer from '../componentes/Footer'
import ImagemCapas from '../componentes/ImagemCapas'
import Formulario from "../componentes/formulario"

const Contato = () => {
  return (
    <div>
      <Navegacao />
      <ImagemCapas heading="Contato" text="Entre em contato com o suporte" />
      <Formulario />
      <Footer />
    </div>
  )
}

export default Contato