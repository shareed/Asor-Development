import { Jumbotron, Container } from 'reactstrap';
import HamburgerMenu from './menu/hamburgerMenu';

import '../sass/header.scss';



function Header() {
  return (
    <div>
      <Jumbotron fluid id="Header">
        <HamburgerMenu />
        <Container fluid>
          <h1 className="display-4">Asor Development</h1>
          <p className="lead">Mollis pretium lorem primis senectus</p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Header;