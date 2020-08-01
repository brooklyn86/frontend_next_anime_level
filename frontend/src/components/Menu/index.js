import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import Alert from '../Alert/Index';

import logo from '../../assets/img/logo.png'
const accessToken = localStorage.getItem('bearer');
export default function Menu() {
  const history = useHistory();

  function logout(){
    localStorage.removeItem('bearer')
    localStorage.removeItem('myList')
    history.push('/login')
  }
  return (
    <div className="header-section">
        <div className="container-fluid">
            <div className="logo">
                <a href="/">
                    <img src={logo} align="center" width="50%" alt="" />
                </a>
            </div>
            <div className="nav-menu">
                <nav className="mainmenu mobile-menu">
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/animes/lancamento">Em Lançamento</a></li>
                        
          
                        <li><a href="/todos-os-animes">Todos os Animes</a></li>
                        {accessToken != null &&
                            <li><a href="/minha-lista">Minha Lista</a></li>
                        }
                        {/* <li><a href="/animes/legendados">Animes Legendados</a></li>
                        <li><a href="/animes/dublados">Animes Dublados</a></li> */}
                                
                        
                        {/* <li><a href="/profile">Perfil</a></li> */}
                        {/* <li><a href="./blog.html">Feed</a></li> */}
                    </ul>
                </nav> 
                {accessToken != null ? 
                      <button className="primary-btn top-btn" onClick={() => logout()}><i className="fa fa-people"></i> Sair</button>
                
                :
                <>
                      <Link to="/login" className="primary-btn top-btn"><i className="fa fa-people"></i> Login</Link>
                      <Link to="/register" className="primary-btn top-btn"><i className="fa fa-people"></i> Cadastra-se</Link>
                </>
                
                }
          

            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
       <Alert />
    </div>
  );
}
