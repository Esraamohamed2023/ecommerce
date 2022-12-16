import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from"../../Site-images/logo.png"
import"./Navs.css"


function Navs() {
  return (
    <Navbar bg="white" expand="lg" sticky="top">
      <Container >
        <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Explore Foods</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
           <Nav.Link id="last-nav" onClick={()=>window.alert("Make a call")}>1800789123</Nav.Link>
         
          </Nav>



        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;