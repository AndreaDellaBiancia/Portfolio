import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../../assets/images/home/logo.png";
import "./style.css";
function NavBar() {
  return (
    <Navbar expand="lg">
      <Container className="m-0"> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#deets" className="nav-item">
              Accueil
            </Nav.Link>
            <Nav.Link href="#deets" className="nav-item">
              Projets
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="nav-item">
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
