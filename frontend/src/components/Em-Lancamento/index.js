import React, { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import logo from '../../assets/img/logo.png'
export default function EmLancamento() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    async function getLancamento(){
       const response = await api.get('animes/lancamento');
           console.log(response.data);
           setAnimes(response.data)
    }
    getLancamento();
   }, []);

  return (
    <>
    <section className="home-about-section spad">
        <div className="container">
            <div className="row">

            </div>
        </div>
    </section>
    <section className="team-member-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Animes Em Lançamento</h2>
                        <p>These are our communicators, you can see each person information</p>
                    </div>
                </div>
            </div>
        </div>
        {animes.map(anime => (
        <div key={anime.id} className="member-item set-bg"  style={{backgroundImage: "url(https://i.pinimg.com/564x/91/04/03/910403cbab5d25f68d4674633ec946de.jpg)"}}>
            <div className="mi-social">
                <div className="mi-social-inner bg-gradient">
                <Link to={`/assistir/${anime.id}/${anime.slug}`} activeClassName="active">Assistir Episodio</Link>
                    
                </div>
            </div>
            <div className="mi-text">
                <h5>{anime.title}</h5>
                <span>{anime.title}</span>
            </div>
        </div>
        ))}

        
    </section>
    </>
  );
}
