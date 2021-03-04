import { Jumbotron, Container } from 'reactstrap';
import HamburgerMenu from './menu/hamburgerMenu';

import '../sass/header.scss';



function Header() {
  return (
    <div>
      <Jumbotron fluid id="Header">
        <HamburgerMenu />
        <Container className='container' fluid>
          <h1 className='Asor'>ASOR DEVELOPMENT</h1>
          <p className="lead">Mollis pretium lorem primis senectus</p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Header