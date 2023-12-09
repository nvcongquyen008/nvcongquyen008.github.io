import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';


const NavImageStyled = styled.img`
    width: 30px;
    height: auto;
    border-radius: 10px;
`;

const NavbarComponents = () => {
    const options = {
      duration: 100,
      smooth: true,
    };

    return (
        <Navbar expand="lg" className="custom-navbar bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><NavImageStyled src='https://i02.appmifile.com/images/2019/11/25/61221316-193c-4d24-a882-4eb18b34f24c.png' alt=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{marginLeft: '20px'}}>Home</Nav.Link>
            <Nav.Link onClick={() => animateScroll.scrollTo(700, options)} style={{marginLeft: '20px'}}>Works</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" style={{marginLeft: '850px'}}>
              <NavDropdown.Item onClick={() => animateScroll.scrollTo(1400, options)}>About</NavDropdown.Item>
              <NavDropdown.Item onClick={() => animateScroll.scrollTo(1400, options)}>
                Contract
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Something
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      );
};

export default NavbarComponents;