
import Navbar from 'react-bootstrap/Navbar';
import "./First.css"
function First() {
  return (
    <Navbar id="nav">
      
        <Navbar.Brand id="Firstnav">envato<span>market</span></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login" onClick={()=>window.open("/Buttom")}>Buy now</a>
          </Navbar.Text>
        </Navbar.Collapse>
    
    </Navbar>
  );
}

export default First;