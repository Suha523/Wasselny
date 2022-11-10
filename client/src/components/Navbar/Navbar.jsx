import React, { useState } from "react";
import { NavLink } from "reactstrap";
import NavbarList from "../NavbarList/NavbarList";

export default function MyNav(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light p-3'>
        <NavLink className='navbar-brand' href='#'>
          Navbar
        </NavLink>
        <button
          onClick={toggle}
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <NavbarList />
        </div>
      </nav>
      {isOpen ? (
        <div className=''>
          <NavbarList />
        </div>
      ) : null}
    </div>
  );
}
