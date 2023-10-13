import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/calendar-icon.png";
import "bootstrap/dist/css/bootstrap.css";

function Header({}) {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={Logo} alt="Suitcase logo of BookDaysOff" />
          BookDaysOff
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="https://www.gov.uk/bank-holidays" target="_blank">
            Visit Gov.UK
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
