import React from 'react';
import { Link } from 'react-router-dom'
function Header() {
  return (
      <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark primary-color">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav"></div>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="/" href="#home">Vic's BBQ <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="/menu" href="#menu">Menu </a>
          </li>
          <li class="nav-item">
            <a class="/specials" href="#specials">Specials</a>
          </li>
          <li class="nav-item">
            <a class="/contact" href="#contact">Contact Us </a>
          </li>
          <li class="nav-item">
           <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}
export default Header;

