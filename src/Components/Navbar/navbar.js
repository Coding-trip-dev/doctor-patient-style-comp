import React from "react";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { BiChevronDown } from "react-icons/bi";
// import { AiFillStar } from "react-icons/ai";
// import { GoPrimitiveDot } from "react-icons/go";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./../App.css";

import Logo from "./../../assets/images icons/1x/Image 12.png";

import countryLogo from "./../../assets/images icons/1x/united-kingdom.png";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{ display: "flex", alignItems: "center" }} src={Logo} />
            <h3> &nbsp;&nbsp;&nbsp;Lorem</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#features">For Consultant</Nav.Link>
              <Nav.Link href="#pricing">For Users</Nav.Link>
              <Nav.Link href="#features">FAQ</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>

              <Nav.Link href="#pricing" className="signupbtn">
                Signup
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                className="loginbtn"
                style={{ color: "white" }}
              >
                Login
              </Nav.Link>

              <NavDropdown title="" id="collasible-nav-dropdown">
                {/* <img src={countryLogo} /> */}
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
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  
    </div>
  );
}

export default App;
