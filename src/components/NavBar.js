import React from 'react'
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Imagen from '../img/logo2.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Icon from '../img/iconcarrito.png';

function navBar() {
  let currentURL = window.location.href;

  return (
    <div>
      <Image style={{width: 550, height:80, paddingTop: 20}} src={Imagen} />
      <br></br>
      <br></br>
      <Navbar bg="dark" variant="dark">
        <Container>

          <Navbar.Brand href="/">Home</Navbar.Brand>

          <Nav >
            <Nav.Link href="/Products">Productos</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="/Contacto">Contacto</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="/QuienesSomos">Quienes Somos</Nav.Link>
          </Nav>

          <Button href="/Carrito" variant="light">
              <Image style={{width: 30, height:30}} src={Icon} />
          </Button>{' '}
        </Container>
      </Navbar>
    <br></br>
    <br/>
  </div>
)
}

export default navBar