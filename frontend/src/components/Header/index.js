import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import logo from '../../assets/img/logo.png'
export default function Header() {

  return (
    <section className="hero-section set-bg" style={{backgroundImage: "url(https://images8.alphacoders.com/632/thumb-1920-632051.png)"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="hero-text">
                        
                        <h2>Anime NEXT Level<br />
                            <span>Assista seu melhores animes e faça novos amigos!</span>
                                                   
                        </h2>
                        <a href="#" className="primary-btn">Assistir Animes</a>
                        <a href="#" className="primary-btn info">Entrar na comunidade</a>

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
