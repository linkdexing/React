import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { GoogleReCaptcha, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { publicApi } from "../api";
import { authUrl, captchaUrl } from "../api/endpoints";
import PublicHOC from "../components/publicHOC";

export default function login(props) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [verified, setVerified] = useState(false);

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
    try {
      if (!verified) {
        toast.error("Captcha not verified");
        return;
      }

      const res = await publicApi.post(`${authUrl}/login`, values);

      localStorage.setItem("linkdexing_token", res.data.token);
      console.log(res.data);
      if (!res.data.verified) {
        return setForm("otp");
      }
      props.setRefresh(true);
    } catch (err) {
      toast.error(err.response.data.message);
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
    <PublicHOC user={props.user}>
      <div className="container">
        <div className="row">
          <div
            className="card col-8"
            style={{ width: 500, marginTop: 130, marginLeft: 20 }}
          >
            <div className="card-body">
              <form
                className="form-control-sm"
                onSubmit={handleSubmit(onSubmit)}
              >
                <>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
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
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
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
                    <Link href="/forgot-password">
                      <a>Forgot Password?</a>
                    </Link>
                    <button type="submit" className="btn btn-primary w-100">
                      Login
                    </button>
                  </div>
                  <div>
                    <span>Not a member? </span>
                    <Link href="/register">
                      <a>Register Now</a>
                    </Link>
                  </div>
                </>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PublicHOC>
  );
}
