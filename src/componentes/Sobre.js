import React from 'react'
import "./SobreStyles.css"
import JOGO4 from '../ferramentas/jogo4.png'
import JOGO3 from '../ferramentas/jogo3.png'

const Sobre = () => {
  return (
    <div className='sobre'>
        <div className='esquerda'>
            <h1>Sobre o Projeto</h1>
            <p>O nosso projeto é uma tentativa de tornar mais acessível e divertido o conhecimneto sobre IPO através de um jogo. Vamos ensinar como você pode começar a investir nas melhores empresas, dentro do jogo traremos análises de empresas quando abriram seu IPO, os fatores de riscos, o antes e o depois dessa empresa. Se você já tem algum conhecimento nosso jogo te ajudará a se preparar para escolher os melhores investimentos e os riscos que você pode correr. Caso você não tenha nenhum conhecimento sobre IPO nosso jogo te dará suporte através de conversas com nossos personagens que te explicarão de forma detalhada tudo aquilo que você precisa saber, e você ainda poderá responder a alguns quiz com aquilo que aprendeu disputando medalhas com seus amigos.</p>
            </div>
        <div className='direita'>
                <div className='img-conteudo'>
                <div className='img-conteudo-cima'>
                    <img src={JOGO3} className='img' alt='bolsa de valores' />
                </div>
                <div className='img-conteudo-baixo'>
                    <img src={JOGO4} className='img' alt='bolsa de valores' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sobre