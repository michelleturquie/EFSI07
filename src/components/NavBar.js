import React from 'react'
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Imagen from '../img/logo2.jpg';
import Navbar from 'react-bootstrap/Navbar';

function navBar() {
  let currentURL = window.location.href;

  return (
    <div>
      <Image style={{width: 550, height:80, paddingTop: 20}} src={Imagen} />
      <br></br>
      <br></br>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Products">Products</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <br></br>
    <br/>
  </div>
)
}

export default navBar

    