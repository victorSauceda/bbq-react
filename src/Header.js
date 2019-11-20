import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavItem, Card } from "react-bootstrap";
import { Auth } from "aws-amplify";
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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <Link to="/">Vic's BBQ</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/menu">Menu</Link>
          </Nav.Link>
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
          <Nav.Link className="text-right" onClick={props.handleLogout}>
            Logout
          </Nav.Link>
        ) : (
          <>
            <Nav.Link className="text-right" href="/signup">
              <Link to="./signup">Signup</Link>
            </Nav.Link>
            <Nav.Link className="text-right" href="/login">
              <Link to="./login">Login</Link>
            </Nav.Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
