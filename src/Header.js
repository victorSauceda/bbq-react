import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavItem, Card } from "react-bootstrap";
function Header() {
  return (
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <div className="collapse navbar-collapse" id="navbarNav"></div>
    //   <ul className="nav">
    //     <li className="nav-item active">
    //       <Link to="/" className="/ col-lg-3">Vic's BBQ <span className="sr-only">(current)</span></Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/menu" className="/menu col-lg-4">Menu </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/specials" className="/specials col-lg-4">Specials</Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/contact" className="/contact col-lg-4">Contact Us </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/cart" className="/cart col-lg-4">Cart</Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/sandbox" className="/cart col-lg-4">Sandbox</Link>
    //     </li>
    //   </ul>
    // </nav>
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
            <Link to="./sandbox">Sandbox</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
