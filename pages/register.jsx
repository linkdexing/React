import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import api from "../api";
import { authUrl } from "../api/endpoints";

export default function RegisterPage() {
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
    <div className='container'>
      <div class='card' style={{ width: 500, marginTop: "10rem" }}>
        <div class='card-body'>
          <form class='form-control-sm' onSubmit={handleSubmit(onSubmit)}>
            <div class='mb-3'>
              <label for='exampleInputName' class='form-label'>
                Name
              </label>
              <input
                type='text'
                class='form-control'
                name='name'
                {...register("name", { required: true, minLength: 4 })}
              />
              {errors?.name && (
                <span className='text-danger'>Name is too short</span>
              )}
            </div>
            <div class='mb-3'>
              <label for='exampleInputEmail1' class='form-label'>
                Email address
              </label>
              <input
                type='email'
                class='form-control'
                aria-describedby='emailHelp'
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors?.email && (
                <span className='text-danger'>Invalid Email format</span>
              )}
            </div>
            <div class='mb-3'>
              <label for='exampleInputPassword1' class='form-label'>
                Password
              </label>
              <input
                type='password'
                class='form-control'
                {...register("password", {
                  required: true,
                  pattern: /^.{5,}$/,
                })}
                aria-describedby='passwordlHelp'
              />
              {errors?.password && (
                <span className='text-danger'>
                  Password must be atleast 5 characters long
                </span>
              )}
            </div>

            <button type='submit' class='btn btn-primary w-100'>
              Register
            </button>
            <div className='mt-2'>
              <Link href='/login'>
                <a>Already registered? Login</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
