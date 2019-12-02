import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavItem, Card } from "react-bootstrap";
import { Auth } from "aws-amplify";
import "./Header.css";
function Header(props) {
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      props.appProps.setIsAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    props.appProps.setIsAuthenticating(false);
  }

  console.log(props.appProps.isAuthenticated);
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      variant="dark"
      style={{ marginLeft: "-170" }}
    >
      <Navbar.Brand href="/">
        <Link to="/">
          <img
            src="logo.png"
            width="100px"
            height="75px"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        className="lg"
        aria-controls="responsive-navbar-nav"
        style={{ width: "70px", height: "70px" }}
      />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          {/* <Nav.Link>
            <Link to="/menu">Menu</Link>
          </Nav.Link> */}
          <Nav.Link href="/contact">
            <Link to="/contact">Contact</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/cart">Cart</Link>
          </Nav.Link>
          <Nav.Link href="/sandbox">
            <Link to="./sandbox">Admin</Link>
          </Nav.Link>
        </Nav>

        {props.appProps.isAuthenticated ? (
          <Nav>
            <Nav.Link href="/settings">
              <Link to="./settings">Settings</Link>
            </Nav.Link>
            <Nav.Link onClick={props.handleLogout}>Logout</Nav.Link>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link href="/signup">
              <Link to="./signup">Signup</Link>
            </Nav.Link>
            <Nav.Link href="/login">
              <Link to="./login">Login</Link>
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
