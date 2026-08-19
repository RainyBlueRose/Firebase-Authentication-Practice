import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

const header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="me-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link><Link to="login">Login</Link></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default header;
