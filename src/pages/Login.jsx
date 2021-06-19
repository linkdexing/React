import { useCallback, useEffect, useState } from "react";
import { GoogleReCaptcha, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { publicApi } from "../api";
import { authUrl, captchaUrl } from "../api/endpoints";

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
    <div className='container'>
      <div className='row'>
        <div
          className='card col-8'
          style={{ width: 500, marginTop: 130, marginLeft: 20 }}
        >
          <div className='card-body'>
            <form className='form-control-sm' onSubmit={handleSubmit(onSubmit)}>
              <>
                <div className='mb-3'>
                  <label htmlFor='exampleInputEmail1' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    disabled={loading}
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
                  <label htmlFor='exampleInputPassword1' className='form-label'>
                    Password
                  </label>
                  <input
                    disabled={loading}
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
                  <Link to='/forgot-password'>Forgot Password?</Link>
                  <button
                    type='submit'
                    className='btn btn-primary w-100'
                    disabled={loading}
                  >
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
                      "Login"
                    )}
                  </button>
                </div>
                <div>
                  <span>Not a member? </span>
                  <Link to='/register'>Register Now</Link>
                </div>
              </>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
