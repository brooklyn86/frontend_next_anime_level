import React,{ useState,useEffect }from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

//CSS
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import '../../assets/css/elegant-icons.css';
import '../../assets/css/font-awesome.min.css';



export default function Assistir(props) {
    const [episode, setEpisode] = useState([]);
    const [players, setPlayers] = useState([]);
    const [animes, setAnimes] = useState([]);
    const [next, setNext] = useState([]);
    const [loading, setLoading] = useState(0);
    const [select, setSelect] = useState(0);
    const [endereco, setEndereco] = useState(0);
    const [gifs, setGifs] = useState([
        'https://i.pinimg.com/originals/88/48/f2/8848f2b79399fe2a61266bd2de95b3a9.gif',
        'https://i.pinimg.com/originals/8a/c8/b9/8ac8b962924d9ed47915aa9a3ea293d5.gif',
        'https://i.pinimg.com/originals/cb/8b/71/cb8b713cfa2ab83dbac3059f06a66fa1.gif',
        'https://i.pinimg.com/originals/26/09/6c/26096c1be071c13c575ba816bad215e0.gif',
        'https://i.pinimg.com/originals/66/90/c1/6690c1a7e509bd4fe1ed9f29535e0655.gif',
        'https://i.pinimg.com/originals/6a/28/86/6a2886116078a0e173a05aae157cc788.gif',
        'https://i.pinimg.com/originals/a4/81/80/a48180fce92a57a11fc171935bcb4219.gif',
        'https://i.pinimg.com/originals/f5/e5/45/f5e5453436f32664e4db1ffd8e07a58d.gif',
        'https://i.pinimg.com/originals/f6/82/dc/f682dc3846d1d77a440f815aa508a652.gif',
        'https://i.pinimg.com/originals/ae/60/7e/ae607e671aa21a2427f69020388cd280.gif',
        'https://i.pinimg.com/originals/8c/e1/e0/8ce1e0427c0cde119b1e2495229ea595.gif',
        'https://i.pinimg.com/originals/3a/a0/91/3aa0918db519432a4de74478152fafb5.gif'
    ])
    useEffect(() => {
      async function getEpisode(episode_id){
        const response = await api.get(`anime/episode/${episode_id}`);
         
        setEpisode(response.data.episode)
        setPlayers(response.data.players)


        const anime_id = response.data.episode.anime_id;
     
        getNextEpisode(anime_id,episode_id)

      }
      async function getNextEpisode(anime_id, episode_id){
        const response = await api.get(`next/episode/${anime_id}/${episode_id}`);
        console.log(response.data)
        setNext(response.data.episode)
        setAnimes(response.data.anime)

     }
      getEpisode(props.match.params.id)
      
     }, []);
     function HandlerPlayer(player){
         setSelect(0);
         setEndereco(player.ep_url)
         setLoading(1)
         setTimeout(function(){
              setSelect(1)
              setLoading(0)
        }, 5000);
       


     }
  return (
    <>
    <Menu />
    <div className="col-md-12">
        <div className="row">
            <div className="col-md-6" style={{backgroundColor:"#FFFFFF"}}>a</div>
            <div className="col-md-6" style={{backgroundColor:"#010101"}}>b</div>
        
        </div>
    </div>
    {episode.length == 0 ?
        <div id="preloder">
           <div class="loader"></div>
       </div>
    :
        <section className="contact-content-section">
        <div className="container-fluid">
            <div className="section-title">
            <h3>Assistir {episode.title}</h3>
            </div>
            <div className='col-md-12'>
                <div className="row">
                {players.map(player => 

                <button key={player.id} onClick={() => HandlerPlayer(player)} className="btn btn-dark"><i className="fa fa-play"></i>{player.nomePlayer}</button>
                    
                    
                )}
                </div>


                 
            </div>
            <div className="row">
                <div className="col-md-6">
                    {select != 0 ? 


                    <video
                    id="my-video"
                    className="video-js col-lg-12"
                    controls
                    preload="auto"
                    width="920"
                    height="580"
                    poster="https://i2.wp.com/livewallpaper.info//wp-content/uploads/2016/11/anime-wallpaper-High-Resolution-Download9.jpg?ssl=1"
                    data-setup="{}"
                >
                    <source src={endereco} type="video/mp4" />
                    {/* <source src="http://media.papepi.club/?kissmegoodbye=AD6v5dxm5yu0vmRtejnCy9CRBEru2Ir47VPae0JNBoqyURL52Kmm4lsmtElyUiE6leoEC5RXrIczJ6cRYwz7O5vm3iqIR4WxDzEj21kCcYjYuS1fVIEkrCnOVzbXpu15plg5GwqS7x7S" type="video/mp4" /> */}
                    
                    <p className="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank"
                        >supports HTML5 video</a
                    >
                    </p>
                </video>
                
                    :  loading == 1 ? 
                        <img src={gifs[Math.floor(Math.random() * gifs.length)]} width='100%' />
                    
                    : <h4>Selecione um player Acima</h4> }
                </div>
                <div className="col-md-6">
                    <div className="cc-map">
                        <iframe src="https://www6.cbox.ws/box/?boxid=843522&boxtag=1v9YRh" width="100%" height="580" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>

                    </div>
                </div>
            </div>
        </div>
    </section>
    }

    <div className="container-fluid d-none d-sm-block">
        <div className="row">
        <div className="col-md-4" style={{backgroundColor:"#FFFFFF"}}>
            Publicdade 2
        </div>
        <div className="col-md-4" style={{backgroundColor:"#010101"}}>
            Publicdade 2
        </div>
        <div className="col-md-4" style={{backgroundColor:"#101010"}}>
            Publicdade 2
        </div>
        </div>
    </div>
    
    <div className="container-fluid d-block d-sm-none">
        <div className="col-md-12"  style={{backgroundColor:"#FFFFFF"}}>
           Mobile
        </div>
    </div>

    <section className="testimonial-section spad">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h4>Proximos Episodios</h4>
                        <p>Our customers are our biggest supporters. What do they think of us?</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="row">
                    {next.length == 0 ? 
                        <>
                        <div className="col-md-12" align="center"><img src="https://media.giphy.com/media/jt7bAtEijhurm/source.gif" class="giphy-embed" /></div>
                        </>
                        :
                        next.map(anime => (

                            <div class="col-md-3" key={anime.id}>
                                <div class="blog-item set-bg" style={{backgroundImage: `url(${animes.image_dafault})`}}>
                                    <div class="bi-tag bg-gradient">Assistir Episodio</div>
                                    <div class="bi-text">
                                        <h5><Link to={`/assistir/${anime.episode_id}/${anime.slug}`} >{anime.title}</Link></h5>
                                        <span><i class="fa fa-clock-o"></i>{animes.title}</span>
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
    <Footer />
    </>
  );
}
