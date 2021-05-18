import React from "react";
import Link from "next/link";

export default function login() {
  return (
    <div className='container'>
      <div className='row'>
        <div
          className='card col-8'
          style={{ width: 500, marginTop: 130, marginLeft: 20 }}
        >
          <div className='card-body'>
            <form className='form-control-sm'>
              <div className='mb-3'>
                <label for='exampleInputEmail1' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
                <div id='emailHelp' className='form-text'>
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className='mb-3'>
                <label for='exampleInputPassword1' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </div>

              <div>
                <Link href='/register'>
                  <a>Forgot Password?</a>
                </Link>
                <button type='submit' className='btn btn-primary w-100'>
                  Login
                </button>
              </div>
              <p></p>
              <div>
                <Link href='/register'>
                  <a>Register Now</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
