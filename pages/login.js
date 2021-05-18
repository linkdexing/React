import React from "react";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

export default function login() {
  return (
    <div>
      <Header />
      <div
        class="card"
        style={{ width: 500, height: 300, marginTop: 130, marginLeft: 20 }}
      >
        <div class="card-body">
          <form class="form-control-sm">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div>
              <button type="submit" class="btn btn-primary">
                Login
              </button>
              <Link href="/register">
                <a>Forgot Password?</a>
              </Link>
            </div>
            <p></p>
            <div>
              <Link href="/register">
                <a>Register Now</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
