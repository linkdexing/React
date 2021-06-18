import { useForm } from "react-hook-form";
import { publicApi } from "../api";
import { authUrl, captchaUrl } from "../api/endpoints";
import { GoogleReCaptcha, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage({ setRefresh, user }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  // Google Recaptcha Verification
  const [verified, setVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const watchPassword = watch("password");

  const handleRecaptchaVerify = useCallback(async (token) => {
    try {
      // verify recaptcha in backend
      const res = await publicApi.post(captchaUrl, { token });
      if (res.data.ok) {
        setVerified(true);
      } else {
        setVerified(false);
      }
    } catch (err) {
      setVerified(false);
    }
  }, []);

  // Values = name, email, password
  const onSubmit = async (values) => {
    try {
      if (!verified) {
        toast.error("Captcha not Verified");
        return;
      }

      // Register user
      const { data } = await publicApi.post(authUrl, values);

      // Sending OTP
      await publicApi.post(`${authUrl}/send-otp/${data.user._id}`);
      toast.success("Registered successfully");

      // Logging in user
      const res = await publicApi.post(`${authUrl}/login`, values);
      localStorage.setItem("jxidwrtdy", res.data.token);
      setRefresh(true);
    } catch (err) {
      toast.error(
        err.response?.data.message ||
          "Something went wrong, Please try again later."
      );
    }
  };

  // Google Recaptcha v3.0 executing.
  useEffect(() => {
    const run = async () => {
      if (!executeRecaptcha) return;
      await executeRecaptcha();
    };
    run();
  }, [executeRecaptcha]);

  return (
    <div className="container">
      <div className="card" style={{ width: 500, marginTop: "6rem" }}>
        <div className="card-body">
          <form className="form-control-sm" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                {...register("name", { required: true, minLength: 4 })}
              />
              {errors?.name && (
                <span className="text-danger">
                  Name should be atleast 5 characters long
                </span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                aria-describedby="emailHelp"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors?.email && (
                <span className="text-danger">Invalid Email format</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                {...register("password", {
                  required: true,
                  pattern: /^.{5,}$/,
                })}
                aria-describedby="passwordlHelp"
              />
              {errors?.password && (
                <span className="text-danger">
                  Password must be atleast 5 characters long
                </span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="passwordConfirm" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordConfirm"
                aria-describedby="Confirm Password"
                {...register("passwordConfirm", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watchPassword || "The passwords do not match",
                })}
              />

              {errors?.passwordConfirm && (
                <span className="text-danger">
                  {errors.passwordConfirm.message}
                </span>
              )}
            </div>

            <GoogleReCaptcha onVerify={handleRecaptchaVerify} />

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
            <div className="mt-2">
              <Link to="/login">Already registered? Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
