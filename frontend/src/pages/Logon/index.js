import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import Alert from '../../components/Alert/Index';
import Loading from '../../components/Loading';
import './styles.css';

import logo from '../../assets/img/logo.png'
import logo_white from '../../assets/img/anime_white.png'

import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post('login', { email, password });
      localStorage.setItem('bearer', response.data.success.token);
      setLoading(false);
      setSuccess('success');
      setMessageAlert('Usuario Autenticado')
      setAlert(true);
      setTimeout(function(){
        setAlert(false);
        history.push('/');

     }, 3000);
    } catch (err) {
      setLoading(false);
      setSuccess('error');
      setMessageAlert('E-mail ou Senha Invalidos')

      setAlert(true);
      setTimeout(function(){
        setAlert(false);
     }, 3000);
    }
  }

  return (
  <>
  {alert == true && <Alert open={alert} success={success} message={messageAlert}/>  }
  {loading == true && <Loading loading={loading} />  }

  <div className='login-image'>
    <div className="logon-container">
        <section className="form">
          <img src={logo_white} alt="Anime NEXT Level"/>

          <form onSubmit={handleLogin}>
            <h1>Faça seu login</h1>

            <input 
              placeholder="E-mail"
              value={email}
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
            <input 
              placeholder="Senha"
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button className="button" type="submit">Entrar</button>

            <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#E02041" />
              Não tenho cadastro
            </Link>
          </form>
        </section>

        <img src="https://i.ya-webdesign.com/images/sword-art-online-kirito-png-8.png" width="40%" alt="Heroes" />
      </div>
  </div>
    
    </>
  );
}
