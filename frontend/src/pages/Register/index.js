import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Alert from '../../components/Alert/Index';
import Loading from '../../components/Loading';

import api from '../../services/api';
import './styles.css';

import logo_white from '../../assets/img/anime_white.png'


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setC_password] = useState('');
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState('');
  const [messageAlert, setMessageAlert] = useState('');
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);

    if(name != '' || email != ''|| password != ''|| c_password != ''){
      if(c_password != password){
        setLoading(false);

        setSuccess('error');
        setMessageAlert('As senhas não estão iguais')
        setAlert(true);
        setTimeout(function(){
          setAlert(false);
       }, 3000);
      }else{
        const data = {
          name,
          email,
          password,
          c_password,
        };
    
        try {
          const response = await api.post('register', data);
          setLoading(false);

          setSuccess('success');
          setMessageAlert(`Seja Bem Vindo: ${name}`)
          setAlert(true);
          setTimeout(function(){
            setAlert(false);
            history.push('/');

        }, 3000);
          
    
        } catch (err) {
          setLoading(false);

          setSuccess('error');
          setMessageAlert('Erro no cadastro tente novamente mais tarde!')
          setAlert(true);
          setTimeout(function(){
            setAlert(false);
         

        }, 3000);
        }
      }

    }
   
  }

  return (
    <div className="login-image">
    <div className="register-container">
    {alert == true && <Alert open={alert} success={success} message={messageAlert}/>  }
    {loading == true && <Loading loading={loading} />  }

      <div className="content">
        <section>
          <img src={logo_white} alt="Anime next Level"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, e crie sua lista de animes.</p>

          <Link className="back-link" to="/login">
            <FiArrowLeft size={16} color="#E02041" />
           Tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome ou Apelido"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input 
            placeholder="Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <div className="input-group">
            <input 
              placeholder="Confirmar Senha"
              type="password"
              value={c_password}
              onChange={e => setC_password(e.target.value)}
            />

          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
    </div>
  );
}