import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" expanded={expanded}>
      <Container className="m-0">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-item" onClick={closeMenu}>
              Accueil
            </Link>
            <Link to="projets" className="nav-item" onClick={closeMenu}>
              Projets
            </Link>
            <Link to="compétences" className="nav-item" onClick={closeMenu}>
              Compétences
            </Link>
            <Link to="contacts" className="nav-item" onClick={closeMenu}>
              Contacts
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;