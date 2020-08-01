import React, { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import logo from '../../assets/img/logo.png'
export default function EmLancamento() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    async function getLancamento(){
       const response = await api.get('/animes/recentes');
       
           setAnimes(response.data)
    }
    getLancamento();
   }, []);

  return (
    <>

    <section className="team-member-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Animes Em Lançamento</h2>
                        <h4>Assista Agora!</h4>
                    </div>
                </div>
            </div>
        </div>
        </section>

        <section class="blog-section spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                    {animes.length == 0 ? 
                    <>
                    <div className="col-md-12" align="center"><img src="https://media.giphy.com/media/jt7bAtEijhurm/source.gif" class="giphy-embed" /></div>
                    </>
                    :
                    animes.map(anime => (

                        <div class="col-md-3" key={anime.id}>
                            <div class="blog-item set-bg" style={{backgroundImage: `url(${anime.Imagem})`}}>
                            <Link to={`/assistir/${anime.Id}/${anime.episodeSlug}`}><div class="bi-tag bg-gradient">Assistir Episodio</div></Link>
                                <div class="bi-text" style={{backgroundColor:"black"}}>
                                <h5 ><Link to={`/assistir/${anime.Id}/${anime.episodeSlug}`} >{anime.Nome}</Link></h5>
                                <span><i class="fa fa-clock-o"></i>{anime.Categoria}</span>
                                
                                </div>
                            </div>
                    
                            
                        </div>
                        ))
        
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
        

        
    </>
  );
}
