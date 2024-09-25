import React from "react";
import Logo from "../assets/Logo-heatwave.png";
import "../CSS/nav.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function Navbar1() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} alt="logo" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="Home">Home</Nav.Link>
            <Nav.Link href="#" className="About">About</Nav.Link>
            <Nav.Link href="#" className="Offers">Offers</Nav.Link>
            <Nav.Link href="#" className="Seats">Seats</Nav.Link>
            <Nav.Link href="#" className="Destination">Destination</Nav.Link>
          </Nav>
          <Button variant="primary">New Bookings</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;