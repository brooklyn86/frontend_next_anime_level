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
import '../../assets/css/font-awesome.min.css';


//JS
// import '../../assets/js/bootstrap.min.js';
// import '../../assets/js/jquery-3.3.1.min.js';
// import '../../assets/js/jquery.slicknav';
// import '../../assets/js/jquery.countdown.min.js';
// import '../../assets/js/jquery.magnific-popup.min.js';




export default function Assistir() {

  return (
    <>
    <Menu />
    <div className="col-md-12">
        #Publicidade2
    </div>
    
    <section className="contact-content-section">
        <div className="container-fluid">
            <div className="section-title">
             <h3>Assistir Boruto Next Generation EP 141</h3>
             </div>
            <div className="row">
                <div className="col-md-6">
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
                    <source src="https://api.animesorion.tube/check/video.php?id=nvnuonttooonnupnvnunnnroxruopnvvroufrroxrupnvnrnnrfxnsrupnvnuoonnuoooopnvnunnvfosnsrupnvnunnnroxruoopnvnunvvruonnuopnvnuonttooonnupnvnunnvfosnsrupnvnunnvfosnsrupnvnunvvruonnuopnvnrvnrnunnuopnvnuoovvuxuxrupnvnuonvnsuxrupnvnunnvfosnsrup&t=nvnuonvnsuxrupnvnrnnrfxnsrupnvvroufrroxrupnvnuoonnuoooopnvnunvvruonnupnvnrvvfnsrrnupnvnrnnrfxnsrupnvnrvvfnsrrnupnvnuoonnuoooopnvnrvnrnunnuop" type="video/mp4" />
                    
                    <p className="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank"
                        >supports HTML5 video</a
                    >
                    </p>
                </video>

                </div>
                <div className="col-lg-6 hidden-xs">
                    <div className="cc-map">
                        <iframe src="https://www6.cbox.ws/box/?boxid=843522&boxtag=1v9YRh" width="100%" height="580" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="container-fluid">
        <div className="row">
        <div className="col-md-4">
            Publicdade 2
        </div>
        <div className="col-md-4">
            Publicdade 2
        </div>
        <div className="col-md-4">
            Publicdade 2
        </div>
        </div>
    </div>

    <section className="testimonial-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h4>Episodios</h4>
                        <p>Our customers are our biggest supporters. What do they think of us?</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="testimonial-slider owl-carousel">
                            <div className="col-lg-6">
                                <div className="testimonial-item">
                                    <div className="ti-author">

                                        <div className="ta-pic">
                                            <img src="https://i.pinimg.com/564x/16/ee/d0/16eed018cfab12c2133ff33f069e4959.jpg" alt=""/>
                                        </div>
                                        <div className="ta-text">
                                            <h5>Boruto Next Generation EP 141</h5>
                                            <span>Speaker Manager</span>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-item">
                                    <div className="ti-author">

                                        <div className="ta-pic">
                                            <img src="https://i.pinimg.com/564x/16/ee/d0/16eed018cfab12c2133ff33f069e4959.jpg" alt=""/>
                                        </div>
                                        <div className="ta-text">
                                            <h5>John Smith</h5>
                                            <span>Speaker Manager</span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-item">
                                    <div className="ti-author">

                                        <div className="ta-pic">
                                            <img src="https://i.pinimg.com/564x/16/ee/d0/16eed018cfab12c2133ff33f069e4959.jpg" alt=""/>
                                        </div>
                                        <div className="ta-text">
                                            <h5>John Smith</h5>
                                            <span>Speaker Manager</span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
