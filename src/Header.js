import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
  return (

    <nav className=" navbar navbar-expand-md bg-dark navbar-light">
      <div className="collapse navbar-collapse" id="navbarNav"></div>
      <ul className="nav">
        <li className="nav-item active">
          <Link to="/" className="/ col-lg-3">Vic's BBQ <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="/menu col-lg-4">Menu </Link>
        </li>
        <li className="nav-item">
          <Link to="/specials" className="/specials col-lg-4">Specials</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="/contact col-lg-4">Contact Us </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="/cart col-lg-4">Cart</Link>
        </li>
        <li className="nav-item">
          <Link to="/sandbox" className="/cart col-lg-4">Sandbox</Link>
        </li>
      </ul>
    </nav>

  );
}
export default Header;

