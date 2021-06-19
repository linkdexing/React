import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { publicApi } from "../api";
import { authUrl } from "../api/endpoints";

// At login page, forgot-passsword
const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  // values = {email}
  const onSubmit = async (values) => {
    setLoading(true);
    try {
      // forgot-password
      await publicApi.post(`${authUrl}/forgot-password`, values);
      toast.success("Password reset email sent");
    } catch (err) {
      toast.error(
        err.message ||
          err.response?.data.message ||
          "Something went wrong, Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className='container mt-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
          <label for='email' className='form-label'>
            Email Address
          </label>
          <input
            type='email'
            disabled={loading}
            className='form-control'
            id='email'
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors?.email && (
            <span className='text-danger'>{errors.email.message}</span>
          )}
        </div>

        <button type='submit' className='btn btn-primary' disabled={loading}>
          {loading ? (
            <>
              <span
                className='spinner-border spinner-border-sm'
                role='status'
                aria-hidden='true'
              />
              <span className='ml-1'>Loading...</span>
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
