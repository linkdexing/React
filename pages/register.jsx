import Link from "next/link";
import { useForm } from "react-hook-form";
import { publicApi } from "../api";
import { authUrl } from "../api/endpoints";
import PublicHOC from "../components/publicHOC";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function RegisterPage(props) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    await publicApi.post(authUrl, values);
    toast.success("Registered successfully");
    router.push("/login");
  };

  return (
    <PublicHOC user={props.user}>
      <div className='container'>
        <div className='card' style={{ width: 500, marginTop: "6rem" }}>
          <div className='card-body'>
            <form className='form-control-sm' onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3'>
                <label for='exampleInputName' className='form-label'>
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
                <label for='exampleInputPassword1' className='form-label'>
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
