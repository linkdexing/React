import Link from "next/link";
import { useForm } from "react-hook-form";
import { publicApi } from "../api";
import { authUrl, captchaUrl } from "../api/endpoints";
import { GoogleReCaptcha, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import PublicHOC from "../components/publicHOC";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";

export default function RegisterPage(props) {
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [verified, setVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRecaptchaVerify = useCallback(async (token) => {
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
        toast.error("Captcha not Verified");
        return;
      }
      const { data } = await publicApi.post(authUrl, values);
      await publicApi.post(`${authUrl}/send-otp/${data.user._id}`);
      toast.success("Registered successfully");

      const res = await publicApi.post(`${authUrl}/login`, values);
      localStorage.setItem("linkdexing_token", res.data.token);
      props.setRefresh(true);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    const run = async () => {
      if (!executeRecaptcha) return;
      await executeRecaptcha();
    };
    run();
  }, [executeRecaptcha]);

  console.log(executeRecaptcha);

  return (
    <PublicHOC user={props.user}>
      <div className='container'>
        <div className='card' style={{ width: 500, marginTop: "6rem" }}>
          <div className='card-body'>
            <form className='form-control-sm' onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3'>
                <label htmlFor='exampleInputName' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  {...register("name", { required: true, minLength: 4 })}
                />
                {errors?.name && (
                  <span className='text-danger'>Name is too short</span>
                )}
              </div>
              <div className='mb-3'>
                <label for='exampleInputEmail1' className='form-label'>
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
                  <span className='text-danger'>Invalid Email format</span>
                )}
              </div>
              <div className='mb-3'>
                <label htmlFor='exampleInputPassword1' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
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

              <GoogleReCaptcha onVerify={handleRecaptchaVerify} />

              <button type='submit' className='btn btn-primary w-100'>
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
    </PublicHOC>
  );
}
