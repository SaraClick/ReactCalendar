import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/calendar-icon.png";
import "bootstrap/dist/css/bootstrap.css";

function Header({}) {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Navbar.Brand className="navbar-branding" href="/">
        <img className="logo" src={Logo} alt="Suitcase logo of BookDaysOff" />
        BookDaysOff
      </Navbar.Brand>
      <Nav className="me-auto" style={{ flex: "1" }}>
        {/* Empty div with flex: 1 to push Nav.Link to the right */}
      </Nav>
      <Nav>
        <Nav.Link href="https://www.gov.uk/bank-holidays" target="_blank">
          Visit Gov.UK
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
