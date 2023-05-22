import React from 'react'
import './formularioStyles.css'

const formulario = () => {
  return (
    <div className='form'>
        <form>
            <label>Nome</label>
            <input type='text'></input>
            <label>Sobrenome</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='text'></input>
            <label>Assunto</label>
            <input type='text'></input>
            <label>Mensagem</label>
            <textarea rows="6" placeholder="Escreve sua mensagem aqui"/>
            <button className='btn'>Enviar</button>
        </form>
    </div>
  )
}

export default formulario