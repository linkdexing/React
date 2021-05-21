import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { publicApi } from "../api";
import { authUrl } from "../api/endpoints";
import PublicHOC from "../components/publicHOC";

export default function login(props) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      const res = await publicApi.post(`${authUrl}/login`, values);
      localStorage.setItem("linkdexing_token", res.data.token);
      props.setUser(res.data);
      router.push("/dashboard");
    } catch (err) {
      toast.error(err.response.data.message);
    }
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
              <form
                className='form-control-sm'
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className='mb-3'>
                  <label htmlFor='exampleInputEmail1' className='form-label'>
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
                  <label htmlFor='exampleInputPassword1' className='form-label'>
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

                <div>
                  <Link href='/register'>
                    <a>Forgot Password?</a>
                  </Link>
                  <button type='submit' className='btn btn-primary w-100'>
                    Login
                  </button>
                </div>
                <p></p>
                <div>
                  <span>Not a member? </span>
                  <Link href='/register'>
                    <a>Register Now</a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PublicHOC>
  );
}
