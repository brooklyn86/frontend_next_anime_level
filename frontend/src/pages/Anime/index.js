import React, { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import EmLancamento from '../../components/Em-Lancamento';
import Alert from '../../components/Alert/Index';
import CircularProgress from '@material-ui/core/CircularProgress';

//CSS
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import '../../assets/css/elegant-icons.css';



export default function Anime(props) {
    const [animes, setAnimes] = useState([]);
    const [inlista, setInlista] = useState(0);
    const [episodes, setEpisodes] = useState([]);
    const history = useHistory();
    const [alert, setAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [messageAlert, setMessageAlert] = useState('');
    const accessToken = localStorage.getItem('bearer');
    if (localStorage.getItem('myList') == null){
        localStorage.setItem('myList','')
    }
    const myList = localStorage.getItem('myList').split(',');


    const [list, setList] = useState([]);
    
    useEffect(() => {
      async function getAnime(id_anime){
         const response = await api.get('/animes/'+id_anime);
         setAnimes(response.data.anime)
         verificaLista(response.data.anime.id)
      }
      async function getEpisodebyAnime(id_anime){
        const response = await api.get('/episode/anime/'+id_anime);
        setEpisodes(response.data.data)
     }


     getEpisodebyAnime(props.match.params.id)
     getAnime(props.match.params.id)

     }, []);
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
        setLoading(true);
        const response = await api.post('/cadastrar/minha-lista',{anime_id: id},{ headers: { Authorization: 'Bearer '+accessToken}} )
        .then((response) => {
            setLoading(false);
            setInlista(1);
            if(myList != null){
                let myList = localStorage.getItem('myList');
                localStorage.setItem('myList', myList+','+id);
                setSuccess('success');
                setMessageAlert(response.data.message)
                setAlert(true);
                setTimeout(function(){
                    setAlert(false);
                 }, 3000);
                
                
            }else{
                
                const myList = localStorage.setItem('myList',id);
                setSuccess('success');
                setMessageAlert(response.data.message)
                setAlert(true);
                setTimeout(function(){
                    setAlert(false);
                 }, 3000);

            }

        })
        .catch((error) => {
            if(error.response.status == 401){
                setLoading(false);

                setSuccess('error');
                setMessageAlert('Por favor faça login, para adicioanar a sua lista')
                setAlert(true);
                setTimeout(function(){
                    setAlert(false);
                 }, 3000);

               
            }
            setLoading(true);
           
        })
     
    }
    async function removeMyList(id){
        setLoading(true);

        const response = await api.post('/remover/minha-lista',{anime_id: id},{ headers: { Authorization: 'Bearer '+accessToken}} )
        .then((response) => {
            setLoading(false);

            setInlista(0);
            setSuccess('success');
            setMessageAlert('Removido da sua lista de animes')
            setAlert(true);
            setTimeout(function(){
                setAlert(false);
             }, 3000);
          
        })
        .catch((error) => {
            
            if(error.response.status == 401){
                setLoading(false);

                setSuccess('error');
                setMessageAlert('Por favor faça login, para adicioanar a sua lista')
                setAlert(true);
                setTimeout(function(){
                    setAlert(false);
                    setLoading(false);
                

                 }, 3000);
                setLoading(false);


            }
           
        })
     
    }
  return (
    <>
    <Menu />
    
    {animes.length  == 0 ? 
    <div id="preloder">
        <div class="loader"></div>
    </div>
    
    : 
    <>
    {alert == true && <Alert open={alert} success={success} message={messageAlert}/>  }
    
    <div className="container-fluid">
        <div className="row">
        <div class="col-sm-6">
                <div class="speaker-item">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="si-pic">
                                <img src={animes.image_dafault} alt="" />
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="si-text">
                                <div class="si-title">
                                    <h3>{animes.title}</h3>
                                    <span>Speaker</span>
                                </div>
                                <div class="si-social">
                                    {/* <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a> */}
                                   { loading == true ? 
                                        <CircularProgress/>
                                    : inlista === 0 ? 
                                        <a onClick={() => {addMyList(animes.id)}}><i class="fa fa-plus"></i></a>
                                    
                                    :
                                        <a onClick={() => {removeMyList(animes.id)}}><i class="fa fa-check"></i></a>
                                    
                                    }
                                </div>
                                <p>{animes.sinopse}.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 hidden-xs">
                <div className="cc-map">
                    <iframe src="https://www6.cbox.ws/box/?boxid=843522&boxtag=1v9YRh" width="100%" height="480" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>

                </div>
            </div>
        </div>
    </div>
<div className="container-fluid">
    <div className="row">
        <div className="col-lg-12">
            <div className="breadcrumb-text">
                <h2>Episodios</h2>
                <div className="bt-option">
                    
                    <span>Encontre o melhor conteúdo abaixo!</span>
                </div>
            </div>
        </div>
    </div>
</div>
<section className="blog-section spad">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <div className="row">
                {episodes.length == 0 ? 
                <>
                <div classNameN="col-md-12" align="center"><img src="https://media.giphy.com/media/jt7bAtEijhurm/source.gif" className="giphy-embed" /></div>
                </>
                :
                episodes.map(anime => (

                    <div className="col-md-3" key={anime.id}>
                        <div className="blog-item set-bg" style={{backgroundImage: `url(${animes.image_dafault})`}}>
                            <Link to={`/assistir/${anime.episode_id}/${anime.slug}`} ><div className="bi-tag bg-gradient">Assistir Episodio</div></Link>
                            <div className="bi-text" style={{backgroundColor:"black"}}>
                                <h5><Link to={`/assistir/${anime.episode_id}/${anime.slug}`} >{anime.title}</Link></h5>
                                <span><i className="fa fa-clock-o"></i>{animes.genero}</span>
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
}
  </>  
  );
}
