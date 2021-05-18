import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-light'
      style={{ minHeight: 80, fontSize: 20 }}
    >
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <a className='navbar-brand' href='/' style={{ fontSize: "2rem" }}>
            Linkdexing.com
          </a>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About Us
              </a>
            </li>
          </ul>
          <form className='d-flex'>
            <Link href='/login'>
              <a className='btn btn-outline-success'>Login</a>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
