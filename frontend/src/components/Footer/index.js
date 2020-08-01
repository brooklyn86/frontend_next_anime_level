import React, { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import logo from '../../assets/img/logo.png'
export default function Footer() {

  return (
    <>
    <footer class="footer-section">
        <div class="container">
            <div class="partner-logo owl-carousel">
                <a href="#" class="pl-table">
                    <div class="pl-tablecell">
                        <img src="img/partner-logo/logo-1.png" alt="" />
                    </div>
                </a>
                <a href="#" class="pl-table">
                    <div class="pl-tablecell">
                        <img src="img/partner-logo/logo-2.png" alt=""/>
                    </div>
                </a>
                <a href="#" class="pl-table">
                    <div class="pl-tablecell">
                        <img src="img/partner-logo/logo-3.png" alt=""/>
                    </div>
                </a>
                <a href="#" class="pl-table">
                    <div class="pl-tablecell">
                        <img src="img/partner-logo/logo-4.png" alt=""/>
                    </div>
                </a>
                <a href="#" class="pl-table">
                    <div class="pl-tablecell">
                        <img src="img/partner-logo/logo-5.png" alt=""/>
                    </div>
                </a>
                <a href="#" class="pl-table">
                    <div class="pl-tablecell">
                        <img src="img/partner-logo/logo-6.png" alt=""/>
                    </div>
                </a>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-text">
                    <div class="ft-social">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-youtube-play"></i></a>
                        </div>
                        <div class="copyright-text"><p>
                            Copyright &copy;{new Date().getFullYear()} Anime NEXT Level All rights reserved </p></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}


