import React from "react";
import { Link } from "react-router-dom";
function NavbarList() {
  return (
    <div>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='nav-link' to='/addAddvForm'>
            Advertise transportation
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarList;
