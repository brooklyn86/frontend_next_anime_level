import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import logo from '../../assets/img/logo.png'

export default function Header() {
  const accessToken = localStorage.getItem('bearer');

  return (
    <section className="hero-section set-bg " data-setbg="https://images8.alphacoders.com/632/thumb-1920-632051.png">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="hero-text">
                        
                        <h2>Anime NEXT Level<br />
                            <span>Assista seus melhores animes e faça novos amigos!</span>
                                                   
                        </h2>
                        <Link to="/todos-os-animes" className="primary-btn">Assistir Animes</Link>
                        {accessToken == null && 
                        <Link to="/login" className="primary-btn info">Entrar na comunidade</Link>
                        
                        }

                    </div>
                </div>
                <div className="col-lg-5">
                    <img src="https://i.ya-webdesign.com/images/sword-art-online-kirito-png-8.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  );
}
