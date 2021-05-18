import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      style={{ height: 80, fontSize: 20 }}
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="/" style={{ fontSize: 35 }}>
            Linkdexing.com
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <button
              class="btn btn-outline-success"
              type="submit"
              style={{ width: 100 }}
            >
              <Link href="/login">
                <a>Login</a>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
