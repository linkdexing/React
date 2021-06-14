import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { publicApi } from "../api";
import { authUrl } from "../api/endpoints";
import PublicHOC from "../components/publicHOC";

const VerificationPage = ({ user, setRefresh }) => {
  const [disableResend, setDisableResend] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onOtpSubmit = async (values) => {
    try {
      await publicApi.post(`${authUrl}/verify-otp/${user._id}`, {
        otp: values.otp.toString(),
      });
      toast.success("Account verified successfully");
      setRefresh(true);
    } catch (err) {
      console.log(err);
      toast.error(err.error || err.response.data.message);
    }
  };

  const handleResend = async () => {
    setDisableResend(true);
    await publicApi.post(`${authUrl}/send-otp/${user._id}`);

    setTimeout(() => {
      setDisableResend(false);
    }, 60000);
  };

  return (
    <PublicHOC user={user}>
      <form className='form-control-sm' onSubmit={handleSubmit(onOtpSubmit)}>
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
              <span className='text-danger'>{errors.otp.message}</span>
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
    </PublicHOC>
  );
};

export default VerificationPage;
