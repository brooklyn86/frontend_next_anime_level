import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import EmLancamento from '../../components/Em-Lancamento';
import Lista from '../../components/MinhaLista';
//CSS
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import '../../assets/css/elegant-icons.css';
import Slider from '../../components/NetflixSlider'
import './App.scss'

export default function Home() {
  const [lista, setLista] = useState([]);
  const [melhores, setMelhores] = useState([]);
  const history = useHistory();
  const accessToken = localStorage.getItem('bearer');
  useEffect(() => {
    async function getLista(){
    const response = await api.get('minha-lista',{ headers: { Authorization: 'Bearer '+accessToken}} )
    .then((response) => {
        setLista(response.data.value)

    })
    .catch((error) => {
        if(error.response.status == 401){
            history.push('/login');
        }
       
    })
    }
    async function getAnimeTop(){
     const response = await api.get('/animes/melhoresAnimes').then((response) => {
      setMelhores(response.data.value)

    })
    .catch((error) => {
       console.log(error)
    })
    }
    
    if(accessToken != null){
        getLista();

    }
    getAnimeTop();
   }, []);
  return (
    <>
    <Menu />
    <Header />
    <Lista pagina={false} />
      {melhores.length > 0 ?
        <Slider>
          {melhores.map(movie => (
            <Slider.Item movie={movie} key={movie.Id}>item1</Slider.Item>
          ))}
        </Slider>
          : 
          <div className="col-md-12" align="center"><img src="https://i.pinimg.com/originals/fe/42/dc/fe42dc4b0c82f44284de30b09239730a.gif" class="giphy-embed" /></div>

          }

    <EmLancamento />
    </>
  );
}
