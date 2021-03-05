import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

import '../sass/footer.scss';



const Footer = () => {
    
    return (
        <div>
            <Jumbotron fluid id="footer-container">
                <h1>Asor Development</h1>
                <div id='Footer'>
                    <Container className='footer-container1' fluid>
                        <div>
                            <p>Lorem ipsum dolor</p>
                            <p>Lorem ipsum dolor</p>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </Container>
                    <div class="divider"></div>
                    <Container className='footer-container2' fluid>
                        <div>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                    </div>
                    <div>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                    </div>
                    </Container>
                </div>
                <p>CopyRights<span> &copy; </span>2021 Asor Development</p>
            </Jumbotron>
        </div>
    );
};

export default Footer;