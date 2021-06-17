import Link from "next/link";
import React from "react";
const links = [
  { link: "https://linkdexing.com", label: "Home" },
  { link: "#", label: "About Us" },
];
export default function Header({ setRefresh, user }) {
  //Logout Button
  const onLogout = () => {
    localStorage.removeItem("jxidwrtdy");
    setRefresh(true);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ minHeight: 80, fontSize: 20 }}
    >
      <div className="container">
        <span>
          <a
            className="container navbar-brand d-flex"
            href="/"
            style={{ fontSize: "2rem" }}
          >
            <img src="/logo.png" />
          </a>
        </span>
        <button
          className="navbar-toggler justify-content-end"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {React.Children.toArray(
              links.map(({ link, label }) => {
                return (
                  <li className="nav-item">
                    <a className="nav-link" href={link}>
                      {label}
                    </a>
                  </li>
                );
              })
            )}
          </ul>
          <>
            {user ? (
              <>
                <div
                  className="nav-link text-dark"
                  style={{ marginRight: "1rem", textTransform: "capitalize" }}
                >
                  {user.name}
                </div>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login">
                <a className="btn btn-outline-success">Login</a>
              </Link>
            )}
          </>
        </div>
      </div>
    </nav>
  );
}
