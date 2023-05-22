import React from 'react'
import './FooterStyle.css'
import { FaFacebook, FaSearchLocation, FaLinkedin, FaPhone, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-conteudo'>
            <div className='esquerda'>
                <div className='localizacao'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                    <div>
                        <p>Brasil</p>
                        <h4>São Paulo, SP</h4>
                    </div>
                </div>
                <div className='=celular'>
                    <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> +55 (11) 3385-8000 </h4>
                </div>
                </div>
            <div className='direita'>
                    <h4>Sobre Nós</h4>
                    <p>Somos um grupo do 1 semestre de análise e desenvolvimento de sistemas, nosso projeto consiste em acessebilizar o conhecimento ao IPO atráves de um gamification</p>
                    <div className="rede-social">
                        <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                        <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                        <FaTwitter  size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Footer