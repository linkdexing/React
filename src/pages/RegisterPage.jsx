import { useForm } from "react-hook-form";
import { publicApi } from "../api";
import { authUrl, captchaUrl, userVariablesUrl } from "../api/endpoints";
import { GoogleReCaptcha, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage({ setRefresh, user }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  // Google Recaptcha Verification
  const [verified, setVerified] = useState(false);

  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
      if (!verified) {
        toast.error("Captcha not Verified");
        return;
      }

      // Register user
      const { data } = await publicApi.post(authUrl, values);

      // Creates contact in SIB
      await publicApi.get(`${authUrl}/createContactInSib/${data.user._id}`);

      toast.success("Registered successfully");

      try {
        // Sending OTP
        await publicApi.post(`${userVariablesUrl}/send-otp/${data.user._id}`);
      } catch (err) {}

      // Logging in user
      const res = await publicApi.post(`${authUrl}/login`, values);
      localStorage.setItem("jxidwrtdy", res.data.token);
      setRefresh(true);
    } catch (err) {
      toast.error(
        err.response?.data.message ||
          "Something went wrong, Please try again later."
      );
    } finally {
      setLoading(false);
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
      <div className="row">
        <h1 className="display-6 mt-5">Sign Up Now!</h1>
        <div className="card col-xs-12 col-md-5 mt-3">
          <div className="card-body">
            <form className="form-control-sm" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  disabled={loading}
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
                  disabled={loading}
                  type="email"
                  id="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                <div className="form-text">
                  *OTP for verification will be send to this Email
                </div>

                {errors?.email && (
                  <span className="text-danger">Invalid Email format</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  disabled={loading}
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
                  disabled={loading}
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

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="ml-1">Loading...</span>
                  </>
                ) : (
                  "Register"
                )}
              </button>
              <div className="mt-2" style={{ fontSize: "1.1rem" }}>
                <Link to="/login">Already registered? Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
