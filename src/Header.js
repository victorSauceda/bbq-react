import React from 'react';
import { Link } from 'react-router-dom'
function Header() {
  return (
      <div>
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Vic's BBQ</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/specials'>Specials</Link></li>
          <li><Link to='/contact'>Contact us</Link></li>
        </ul>
      </nav>
    </header>
    </div>
  );
}
export default Header;