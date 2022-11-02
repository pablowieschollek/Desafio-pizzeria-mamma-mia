import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from "react";
import MyContext from '../Mycontext';
import {Link} from "react-router-dom"

function Navigation() {

    const {cartitems, totalCart} = useContext(MyContext)

  return (
    <Navbar bg="info" expand="lg" className='navi'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex w-100 justify-content-between">
            <Nav.Link to="/" as={Link} className="fw-bold text-light">🍕Pizzería Mamma Mia</Nav.Link>
            <Nav.Link to="/carrito" as={Link} className="fw-bold text-light">🛒 ${totalCart(cartitems)}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default Navigation;