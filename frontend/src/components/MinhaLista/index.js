import React, { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
export default function MinhaLista(props) {

  const [lista, setLista] = useState([]);
  const [pagina, setPagina] = useState(false);
  const history = useHistory();
  const accessToken = localStorage.getItem('bearer');
  useEffect(() => {
    async function getLista(){
        console.log(props)
    if(props.pagina == true){
        setPagina(true)
    }
    const response = await api.get(`minha-lista?pagina=${pagina}`,{ headers: { Authorization: 'Bearer '+accessToken}} )
    .then((response) => {
        setLista(response.data.data)
    })
    .catch((error) => {
        
        if(error.response.status == 401){
            history.push('/login');
        }
       
    })
    }
    if(accessToken != null){
        getLista();

    }
   }, []);

  return (
      
    <>
<section className="home-about-section">
</section>
<section class="blog-section">
    <div class="container-fluid">
            <div className="breadcrumb-text a-left" >
                <h2>Minha Lista de Anime</h2>
                {pagina == false && 
                <Link to='/minha-lista'><h6>Ver lista completa.</h6></Link>
                
                }
                <hr />
            </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">

                    {
                    accessToken !== null ?
                    lista.length == 0 ? 
                    <>
                    <div class="col-md-3">
                        <div class="blog-item set-bg">
                            <div class="bi-tag bg-gradient"></div>
                            <div class="bi-text">
                                <h5></h5>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="blog-item set-bg">
                            <div class="bi-tag bg-gradient"></div>
                            <div class="bi-text">
                                <h5></h5>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="blog-item set-bg">
                            <div class="bi-tag bg-gradient"></div>
                            <div class="bi-text">
                                <h5></h5>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="blog-item set-bg">
                            <div class="bi-tag bg-gradient"></div>
                            <div className="col-md-12 text-center" style={{marginTop:'20px'}}>
                                <h1><i className="fa fa-plus"></i></h1>
                            </div>
                            
                        </div>
                    </div>
                    </>
                    :
                    lista.map(anime => (
                        <div class="col-md-3" key={anime.id}>
                            <div class="blog-item set-bg" style={{backgroundImage: `url(${anime.image_dafault})`}}>
                            <Link to={`/anime/${anime.id_api}/${anime.slug}`} ><div class="bi-tag bg-gradient">Assistir Anime</div></Link>
                                <div class="bi-text" style={{backgroundColor:"black"}}>
                                    <h5><Link to={`/anime/${anime.id_api}/${anime.slug}`} >{anime.title}</Link></h5>
                                    <span><i class="fa fa-clock-o"></i>{anime.genero}</span>
                                </div>
                            </div>
                        </div>
                        ))
                    :
                    <div class="col-md-3">
                        <div class="blog-item set-bg">
                            <div class="bi-tag bg-gradient"></div>
                            <div class="bi-text">
                                <h5><Link to='/login' >Para acessar sua lista faça login no site</Link></h5>
                                
                            </div>
                        </div>
                    </div>
        
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        

        
    </>
  );
}
