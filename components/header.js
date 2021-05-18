import React, { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header(props) {
  const router = useRouter();

  const onLogout = useCallback(() => {
    localStorage.removeItem("linkdexing_token");
    router.replace("/");
  }, []);

  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-light'
      style={{ minHeight: 80, fontSize: 20 }}
    >
      <div className='container'>
        <span>
          <a
            className='container navbar-brand d-flex'
            href='/'
            style={{ fontSize: "2rem" }}
          >
            Linkdexing.com
          </a>
        </span>
        <button
          className='navbar-toggler justify-content-end'
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
          {/* <a className="navbar-brand" href="/" style={{ fontSize: "2rem" }}>
            Linkdexing.com
          </a> */}
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
            {props.user ? (
              <button className='btn btn-outline-danger' onClick={onLogout}>
                Logout
              </button>
            ) : (
              <Link href='/login'>
                <a className='btn btn-outline-success'>Login</a>
              </Link>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
}
