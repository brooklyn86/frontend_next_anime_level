import React, { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import EmLancamento from '../../components/Em-Lancamento';
import Autocomplete from '@material-ui/lab/Autocomplete';

import TextField from '@material-ui/core/TextField';

//CSS
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import '../../assets/css/elegant-icons.css';
import Footer from '../../components/Footer';



export default function TodosAnimes() {
    const [animes, setAnimes] = useState([]);
    const [autocomplete, setAutocomplete] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState();
    const [inlista, setInlista] = useState(0);
    const accessToken = localStorage.getItem('bearer');

    var  [page, setPage] = useState(1);
    const [active, setActive] = useState(1);
    const history = useHistory();
    if (localStorage.getItem('myList') == null){
        localStorage.setItem('myList','')
    }
    const myList = localStorage.getItem('myList').split(',');


    const [list, setList] = useState([]);
    const options = autocomplete.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
      });
    useEffect(() => {
      async function getAnimes(){
         const response = await api.get('/animes/todosAnimes');
             setAnimes(response.data.data)
      }
      async function getAutoCompleteAnimes(){
        const response = await api.get('/animes/todosAnimes/autoComplete');
            setAutocomplete(response.data)
        }
      getAnimes();
      getAutoCompleteAnimes();
     }, []);
  function findValue(valor){
        history.push('/anime/'+valor.id_api+'/'+valor.slug);

  }

  async function moreAnime(){
    var pagina = page+1;
    var animeList = animes;
    const response = await api.get('/animes/todosAnimes?page='+pagina);
    if(response.data.data.length === 0){
        setActive(0);

    }else{
        var ani = animeList.concat(response.data.data)
        setAnimes(ani)
        setPage(pagina);

    }
  }
  function verificaLista(id){      
        
    if(myList.length == 0){ 
       if(myList == id){
           setInlista(1);
       }else{
            setInlista(0);

       }
    }else{
        const inList = myList.find(item => (item == id))
       if(inList){

           setInlista(1)
        }
        else{
            setInlista(0);

       }
    }
 }
  async function addMyList(id){

    const response = await api.post('/cadastrar/minha-lista',{anime_id: id},{ headers: { Authorization: 'Bearer '+accessToken}} )
    .then((response) => {
        setInlista(1);
        if(myList != null){
            let myList = localStorage.getItem('myList');
            localStorage.setItem('myList', myList+','+id);
            
            
        }else{
            
            const myList = localStorage.setItem('myList',id);

        }

    })
    .catch((error) => {
        if(error.response.status == 401){
            history.push('/login');
        }
       
    })
 
}
async function removeMyList(id){

    const response = await api.post('/remover/minha-lista',{anime_id: id},{ headers: { Authorization: 'Bearer '+accessToken}} )
    .then((response) => {
        setInlista(0);
    })
    .catch((error) => {
        console.log(error.response)
        if(error.response.status == 401){
            history.push('/login');
        }
       
    })
 
}
  return (
    <>
    <Menu />
    <section class="newslatter-section about-newslatter">
        <div class="container-fluid">
            <div class="newslatter-inner set-bg" data-setbg="https://preview.redd.it/aihj4mgqfzq11.png?auto=webp&s=9da151fed45ceecfa94046cc4a17d2afcb51d17a" style={{backgroundImage: `url('https://preview.redd.it/aihj4mgqfzq11.png?auto=webp&s=9da151fed45ceecfa94046cc4a17d2afcb51d17a')`}}>
                <div class="ni-text">
                    <h3>Todos os Animes</h3>
                    <p>Encontre o melhor conteúdo abaixo!</p>
                </div>
                <form action="#" class="ni-form">
                    <Autocomplete
                    id="grouped-demo"
                    options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                    groupBy={(option) => option.firstLetter}
                    getOptionLabel={(option) => option.title}
                    value={search}
                    onChange={(option, value) => findValue(value)}
                    renderInput={(params) => <TextField {...params} label="Qual anime você está procurando?" variant="outlined" />}
                    />
                    {/* <input type="text" placeholder="Qual anime você está procurando?" onChange={getInputProps}/> */}
                    {/* <button type="submit">Buscar</button> */}
                </form>
            </div>
        </div>
    </section>
    <section className="breadcrumb-section">
    </section>

    <section className="speaker-section spad">
        <div className="container-fluid">
            <div className="row">
            {animes.length == 0 ? 
            <>
            <div className="col-md-12" align="center"><img src="https://media.giphy.com/media/jt7bAtEijhurm/source.gif" class="giphy-embed" /></div>
            </>
            :
        
            animes.map(anime => (
                <div className="col-sm-4" key={anime.id}>
                    <div className="speaker-item">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="si-pic">
                                    <img src={anime.image_dafault} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="si-text">
                                    <div className="si-title">
                                        <h4>{anime.title}</h4>
                                        <span>Ano de lançamento: {anime.ano_lancamento}</span>
                                        <div>
                                           
                                            <p>{anime.genero}</p>

                                           <p><i className="fa fa-eye"></i>{anime.tipo_ep}</p>
                                    
                                        </div>
                                    </div>
                                    <div className="si-social">
                                        <Link to={`/anime/${anime.id_api}/${anime.slug}`} href="#"><i className="fa fa-play"></i></Link>
                                        {/* {inlista === 0 ? 
                                        <a onClick={() => {addMyList(anime.id_api)}}><i class="fa fa-plus"></i></a>
                                    
                                    :
                                        <a onClick={() => {removeMyList(anime.id_api)}}><i class="fa fa-check"></i></a>
                                    
                                    } */}
                                    </div>
                                    <p>{anime.sinopse.substring(0,200)}...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            {animes.length > 0 ?
            <div className="load-more">
                {active  == 0 ? 
                <a className="primary-btn" disabled>Fim da lista</a>



                :
                <a onClick={() => moreAnime()} className="primary-btn">Carregar mais</a>
                
                }
            </div>
            : 
            <>
            </> }
        </div>
    </section>
    <Footer />
    </>
  );
}
