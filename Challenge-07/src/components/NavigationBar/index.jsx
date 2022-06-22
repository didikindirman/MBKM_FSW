import React from 'react'
import '../../styles/style.css'
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function NavigationBar() {
  return (
    // Navigation Bar
    <Navbar className='navbar' expand="lg">
      <Container className='container-nav'>
        <img
          src={require('../../assets/NavigationBar/logo.png')}
          width="100"
          height="34s"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='nav-link' href="#">Our Services</Nav.Link>
            <Nav.Link className='nav-link' href="#">Why Us</Nav.Link>
            <Nav.Link className='nav-link' href="#">Testimonial</Nav.Link>
            <Nav.Link className='nav-link' href="#">FAQ</Nav.Link>
            <Button className='button-register fw-bold'>Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar