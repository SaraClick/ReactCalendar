import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/outofoffice.png";
import "bootstrap/dist/css/bootstrap.css";

function Header({}) {
  return (
    <Nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      activeKey="/"
      onSelect={(selectedKey) => (activeKey = selectedKey)}
    >
      <Nav.Item>
        <Nav.Link href="/">OutOfOffice</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Calendar">Book time Off</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Holidays">Bank Holidays</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
