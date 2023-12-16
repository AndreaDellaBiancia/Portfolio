import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../assets/images/home/logo.png'
import "./style.css";
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home" ><img src={logo} alt="Andrea" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav style={{fontSize: "2rem"}}>
            <Nav.Link href="#deets" style={{marginRight: "2rem"}}>Projets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  
export default NavBar;