import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import EmLancamento from '../../components/Em-Lancamento';

//CSS
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import '../../assets/css/elegant-icons.css';

//JS
// import '../../assets/js/bootstrap.min.js';
// import '../../assets/js/jquery-3.3.1.min.js';
// import '../../assets/js/jquery.slicknav';
// import '../../assets/js/jquery.countdown.min.js';
// import '../../assets/js/jquery.magnific-popup.min.js';







export default function Home() {

  return (
    <>
    <Menu />
    <Header />
    <EmLancamento />
    </>
  );
}
