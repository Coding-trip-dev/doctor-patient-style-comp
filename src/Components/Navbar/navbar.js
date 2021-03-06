import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../index.css";

import Logo from "./../../assets/images icons/1x/Image 12.png";

import countryLogo from "./../../assets/images icons/1x/united-kingdom.png";

import NavbarWrapper, { Logotext, Smlogotext } from "./navbar.style";
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

function App() {
  return (
    <NavbarWrapper>
      <Navbar collapseOnSelect expand="lg" className="bghead" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="logoheader">
            <img  className="logimg" src={Logo} />
            <Logotext className="logoname"> &nbsp;Loreteav </Logotext>
            {/* <Smlogotext>Psikolog</Smlogotext> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#features" className="link colb">
                HomePage
              </Nav.Link>
              <Nav.Link href="#pricing" className="link colb">
                For Experts
              </Nav.Link>
              <Nav.Link href="#features" className="link colb">
                FAQ
              </Nav.Link>
              <Nav.Link href="#pricing" className="link colb">
                Questions
              </Nav.Link>

              <Nav.Link href="#pricing" className="signupbtn link colb">
                Signup
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                className="loginbtn link colw"
                style={{ color: "white" }}
              >
                Login
              </Nav.Link>

              {/* <NavDropdown
                title=""
                id="collasible-nav-dropdown"
                className="colb"
              >
                <img src={countryLogo} />
                <NavDropdown.Item href="#action/3.1">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarWrapper>
  );
}

export default App;
