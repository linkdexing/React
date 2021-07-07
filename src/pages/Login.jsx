import { useCallback, useEffect, useState } from "react";
import { GoogleReCaptcha, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { publicApi } from "../api";
import { authUrl, captchaUrl } from "../api/endpoints";
// import TopLeftAdv from "../components/TopLeftAdv";
// import BottomRightAdv from "../components/BottomRightAdv";

export default function LoginPage({ setRefresh }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [verified, setVerified] = useState(false);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleReCaptchaVerify = useCallback(async (token) => {
    try {
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

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      if (!verified) {
        toast.error("Captcha not verified");
        return;
      }

      const res = await publicApi.post(`${authUrl}/login`, values);
      localStorage.setItem("jxidwrtdy", res.data.token);

      setRefresh(true);
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const run = () => {
      if (!executeRecaptcha) return;
      executeRecaptcha();
    };

    run();
  }, [executeRecaptcha]);

  return (
    <div className="container">
      <div className="row">
        {/* <TopLeftAdv /> */}
        <h1 className="display-6 mt-5">Login</h1>
        <div className="card col-xs-12 col-md-5 mt-3">
          <div className="card-body">
            <form className="form-control-sm" onSubmit={handleSubmit(onSubmit)}>
              <>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    disabled={loading}
                    className="form-control"
                    aria-describedby="emailHelp"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                  {errors?.email && (
                    <span className="text-danger">Incorrect Email.</span>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    disabled={loading}
                    type="password"
                    className="form-control"
                    {...register("password", {
                      required: true,
                    })}
                  />
                  {errors?.password && (
                    <span className="text-danger">Incorrect Password.</span>
                  )}
                </div>

                <GoogleReCaptcha onVerify={handleReCaptchaVerify} />

                <div>
                  <Link
                    to="/forgot-password"
                    className="d-block mb-1"
                    style={{ fontSize: "1.1rem" }}
                  >
                    Forgot Password?
                  </Link>
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
                      "Login"
                    )}
                  </button>
                </div>
                <div className="mt-2" style={{ fontSize: "1.1rem" }}>
                  <span>Not a member? </span>
                  <Link to="/register">Register Now</Link>
                </div>
              </>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
