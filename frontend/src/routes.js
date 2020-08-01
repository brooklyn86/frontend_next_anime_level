import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Home from './pages/Home';

import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import AssistirAnime from './pages/Assistir';
import TodosAnimes from './pages/TodosAnimes';
import Lancamento from './pages/Lancamento';
import Anime from './pages/Anime';
import MinhaLista from './pages/MinhaLista';



export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/animes/lancamento" exact component={Lancamento} />
        <Route path="/login" component={Logon} />
        <Route path="/assistir/:id/:slug" component={AssistirAnime} />
        <Route path="/profile" component={Profile} />
        <Route path="/todos-os-animes/:page?/:q?/:search?" component={TodosAnimes} />
        <Route path="/anime/:id/:slug" component={Anime} />
        <Route path="/minha-lista" component={MinhaLista} />
      </Switch>
    </BrowserRouter>
  );
}