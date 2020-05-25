import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import logo from '../../assets/img/logo.png'
export default function Menu() {

  return (
    <div className="header-section">
        <div className="container-fluid">
            <div className="logo">
                <a href="./index.html">
                    <img src={logo} align="center" width="50%" alt="" />
                </a>
            </div>
            <div className="nav-menu">
                <nav className="mainmenu mobile-menu">
                    <ul>
                        <li><a href="./index.html">Inicio</a></li>
                        <li><a href="./about-us.html">Em Lançamento</a></li>
                        <li><a href="./speaker.html">Lista de Animes</a>
                            <ul className="dropdown">
                                <li><a href="#">Jayden</a></li>
                                <li><a href="#">Sara</a></li>
                                <li><a href="#">Emma</a></li>
                                <li><a href="#">Harriet</a></li>
                            </ul>
                        </li>
                        <li><a href="./schedule.html">Perfil</a></li>
                        <li><a href="./blog.html">Feed</a></li>
                    </ul>
                </nav>
                <a href="#" className="primary-btn top-btn"><i className="fa fa-people"></i> Login</a>
                <a href="#" className="primary-btn top-btn"><i className="fa fa-people"></i> Registrar</a>

            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </div>
  );
}
