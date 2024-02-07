import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixLogo from "../assets/NetflixLogo.png";

const MyNavbar = () => (
  <Navbar expand="lg" bg="dark" variant="dark" className="mb-3">
    <Container fluid>
      <Navbar.Brand href="#">
        <Image
          src={NetflixLogo}
          alt="Netflix Logo"
          fluid
          style={{ maxWidth: "150px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">TV Shows</Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">New & Popular</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavbar;
