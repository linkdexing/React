import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { GoogleReCaptcha, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { publicApi } from "../api";
import { authUrl, captchaUrl } from "../api/endpoints";
import PublicHOC from "../components/publicHOC";

export default function login(props) {
  const [form, setForm] = useState("login");
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [verified, setVerified] = useState(false);

  const [user, setUser] = useState();

  const [disableResend, setDisableResend] = useState(false);

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

      setUser(res.data.user);

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

  const onOtpSubmit = async (values) => {
    try {
      await publicApi.post(`${authUrl}/verify-otp/${user._id}`, {
        otp: values.otp.toString(),
      });
      toast.success("Account verified successfully");
      props.setRefresh(true);
    } catch (err) {
      toast.error(err.error || err.response.data.message);
    }
  };

  useEffect(() => {
    const run = async () => {
      if (!executeRecaptcha) return;
      await executeRecaptcha();
    };

    run();
  }, [executeRecaptcha]);

  const handleResend = async () => {
    setDisableResend(true);
    await publicApi.post(`${authUrl}/send-otp/${user._id}`);

    setTimeout(() => {
      setDisableResend(false);
    }, 60000);
  };

  return (
    <PublicHOC user={props.user}>
      <div className='container'>
        <div className='row'>
          <div
            className='card col-8'
            style={{ width: 500, marginTop: 130, marginLeft: 20 }}
          >
            <div className='card-body'>
              {form === "login" ? (
                <form
                  className='form-control-sm'
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <>
                    <div className='mb-3'>
                      <label
                        htmlFor='exampleInputEmail1'
                        className='form-label'
                      >
                        Email address
                      </label>
                      <input
                        type='email'
                        className='form-control'
                        aria-describedby='emailHelp'
                        {...register("email", {
                          required: true,
                          pattern:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                      />
                      {errors?.email && (
                        <span className='text-danger'>Incorrect Email.</span>
                      )}
                    </div>
                    <div className='mb-3'>
                      <label
                        htmlFor='exampleInputPassword1'
                        className='form-label'
                      >
                        Password
                      </label>
                      <input
                        type='password'
                        className='form-control'
                        {...register("password", {
                          required: true,
                        })}
                      />
                      {errors?.password && (
                        <span className='text-danger'>Incorrect Password.</span>
                      )}
                    </div>

                    <GoogleReCaptcha onVerify={handleReCaptchaVerify} />

                    <div>
                      <Link href='/forgot-password'>
                        <a>Forgot Password?</a>
                      </Link>
                      <button type='submit' className='btn btn-primary w-100'>
                        Login
                      </button>
                    </div>
                    <div>
                      <span>Not a member? </span>
                      <Link href='/register'>
                        <a>Register Now</a>
                      </Link>
                    </div>
                  </>
                </form>
              ) : (
                <form
                  className='form-control-sm'
                  onSubmit={handleSubmit(onOtpSubmit)}
                >
                  <>
                    <div className='mb-3'>
                      <label htmlFor='otp' className='form-label'>
                        One-time password
                      </label>
                      <input
                        type='number'
                        className='form-control'
                        {...register("otp", {
                          required: true,
                          pattern: {
                            value: /^[0-9]{6}$/,
                            message: "Invalid OTP format",
                          },
                        })}
                      />
                      {errors?.otp && (
                        <span className='text-danger'>
                          {errors.otp.message}
                        </span>
                      )}
                    </div>
                    <button type='submit' className='btn btn-primary w-100'>
                      Verify
                    </button>
                    <button
                      type='button'
                      className='btn btn-link w-100'
                      onClick={handleResend}
                      disabled={disableResend}
                    >
                      Resend OTP
                    </button>
                  </>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </PublicHOC>
  );
}
