import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import api from "../api";
import { authUrl } from "../api/endpoints";

export default function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    const res = await api.post(authUrl, values);
    console.log(res);
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="card col-8"
          style={{ width: 500, marginTop: 130, marginLeft: 20 }}
        >
          <div className="card-body">
            <form className="form-control-sm" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                {errors?.email && (
                  <span className="text-danger">Incorrect Email.</span>
                )}
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  {...register("password", {
                    required: true,
                    pattern: /^.{5,}$/,
                  })}
                />
                {errors?.password && (
                  <span className="text-danger">Incorrect Password.</span>
                )}
              </div>

              <div>
                <Link href="/register">
                  <a>Forgot Password?</a>
                </Link>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </div>
              <p></p>
              <div>
                <span>Not a member? </span>
                <Link href="/register">
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
