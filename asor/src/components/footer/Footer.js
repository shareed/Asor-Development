import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

import { footerMenuItems1 } from './footerMenuItems1';
import { footerMenuItems2 } from './footerMenuItems2';


import '../../sass/footer.scss';



const Footer = () => {
    
    return (
        <div>
            <Jumbotron fluid id="footer-container">
                <div className='footer-top'>
                    <h1>Asor Development</h1>
                    <div className="social-container">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />

                        <FontAwesomeIcon icon={faFacebook} size="2x" />

                        <FontAwesomeIcon icon={faTwitter} size="2x" />

                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </div>
                </div>
               
                <div id='footer-middle'>

                    <Container className='footer-container1' fluid>
                        <div className='footer-content'>

                            <p>Explore</p>

                            <div className='footer-menu'>

                                <div>
                                    <ul className = 'footer-menu-items'>
                                        {footerMenuItems1.map(item => (
                                            <li className = 'footer-menu-list-item' key = {item.label}>
                                                <a href = {item.url} className = 'menu-links' >
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <ul className = 'footer-menu-items'>
                                        {footerMenuItems2.map(item => (
                                            <li className = 'footer-menu-list-item' key = {item.label}>
                                                <a href = {item.url} className = 'menu-links' >
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </Container>

                    <div class="divider"></div>


                    <Container className='footer-container2' fluid>
                        <div className='footer-container2-content'>
                            <p className='p-heading'>Hire Us</p>
                            <p>Have a project in Mind? Contact Us!!!</p>
                            <p>1234567898</p>
                            <p>email@email.com</p>
                        </div>
                    </Container>
                </div>
                <div className='copyrights'>
                <p>CopyRights<span> &copy; </span>2021 Asor Development</p>
                </div>
            </Jumbotron>
        </div>
    );
};

export default Footer;