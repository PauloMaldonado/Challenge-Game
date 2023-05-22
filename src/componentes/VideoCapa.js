import React from 'react'
import "./VideoCapaStyle.css"
import {Link} from "react-router-dom"
import CapaVideo from "../ferramentas/IPO GAME.mp4"

const VideoCapa = () => {
  return (
    <div className='capa'>
        <video autoPlay loop muted id="video">
            <source src={CapaVideo} type="video/mp4"/>
        </video>
        <div className='conteudo'>
            <h1>IPO - A Link to the Future</h1>
            <p>Sua jornada começa aqui</p>
            <div>
                <Link to="/login" className='btn'>Jogue Agora</Link>

            </div>
        </div>
    </div>
    
  )
}

export default VideoCapa