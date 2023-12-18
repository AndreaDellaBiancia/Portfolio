import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Navbar expand="lg">
      <Container className="m-0"> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-item">
              Accueil
            </Link>
            <Link to="projets" className="nav-item">
              Projets
            </Link>
            <Nav.Link className="nav-item">
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
