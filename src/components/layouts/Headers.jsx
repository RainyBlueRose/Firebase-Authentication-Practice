import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>Login</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default header;
