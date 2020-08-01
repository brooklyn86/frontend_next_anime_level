import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import Autocomplete from '@material-ui/lab/Autocomplete';

import TextField from '@material-ui/core/TextField';
import api from '../../services/api';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import EmLancamento from '../../components/Em-Lancamento';
import Lista from '../../components/MinhaLista';
//CSS
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import '../../assets/css/elegant-icons.css';
import Slider from '../../components/NetflixSlider';
import '../Home/App.scss';

export default function Lancamento() {
    const [autocomplete, setAutocomplete] = useState([]);
    const [search, setSearch] = useState();
    var  [page, setPage] = useState(1);
    const [active, setActive] = useState(1);
 
  const history = useHistory();
  const accessToken = localStorage.getItem('bearer');
  const options = autocomplete.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
        return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        ...option,
        };
  });
  function findValue(valor){
    history.push('/anime/'+valor.id_api+'/'+valor.slug);

}
  useEffect(() => {


        async function getAutoCompleteAnimes(){
            const response = await api.get('/animes/todosAnimes/autoComplete');
                setAutocomplete(response.data)
            }
            getAutoCompleteAnimes()  
     
   }, []);
  return (
    <>
    <Menu />
        <section class="newslatter-section about-newslatter">
            <div class="container-fluid">
                <div class="newslatter-inner set-bg" data-setbg="https://preview.redd.it/aihj4mgqfzq11.png?auto=webp&s=9da151fed45ceecfa94046cc4a17d2afcb51d17a" style={{backgroundImage: `url('https://preview.redd.it/aihj4mgqfzq11.png?auto=webp&s=9da151fed45ceecfa94046cc4a17d2afcb51d17a')`}}>
                    <div class="ni-text">
                        <h3>Minha Lista</h3>
                        <p>Seu melhores animes escolhido por você!</p>
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
        <Lista pagina={true}/>
    </>
  );
}
