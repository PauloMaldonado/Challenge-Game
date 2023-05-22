import React, { useState } from 'react';
import './LoginForm.css'; 
import CapaVideo from "../ferramentas/IPO GAME.mp4"

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   

    
    if (email && senha) {
      
      window.location.href = "https://r4cs.github.io/";
    } else {
      
      console.log('Login inválido');
    }
  };

  return (
    <div className='capa'>
        <video autoPlay loop muted id="video">
            <source src={CapaVideo} type="video/mp4"/>
        </video>
    <div className="login-conteudo"> 
        <main className="login-main">
        <h4>Login</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
          <br />
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" value={senha} onChange={handleSenhaChange} required />
          <br />
          <button className='btn-entrar' type="submit">Iniciar Jogo</button>
        </form>
      </main>
    </div>
    </div>
  );
};

export default Login;
