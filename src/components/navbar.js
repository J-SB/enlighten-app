import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import logo from "../assets/images/logo2.png"

function Header() {
  return (
    <Navbar bg="" expand="lg">
      <Container fluid className='header'>
        {/* <div className="ml-10"> */}
            <Navbar.Brand href="#home">
              <img src={logo} className="brandLogo"/>
            </Navbar.Brand>
        {/* </div> */}
        <div className='nav_items'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-items-center">
                <Nav.Link href="#home" className='raise'>Home</Nav.Link>
                <Nav.Link href="#link" className='raise'>Our Hotels</Nav.Link>
                <Nav.Link href="#link" className='raise'>Offers</Nav.Link>
                <Nav.Link href="#aboutus" className='raise'>About Us</Nav.Link>
                <Nav.Link href="#home">
                  <button
                    className="btn btn-outline-primary"
                    role="button"
                    >
                      Parter With Us
                  </button>
                 </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;