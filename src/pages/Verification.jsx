import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { publicApi } from "../api";
import { authUrl, userVariablesUrl } from "../api/endpoints";

const VerificationPage = ({ user, setRefresh }) => {
  // Resend OTP
  const [disableResend, setDisableResend] = useState(false);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onOtpSubmit = async ({ otp }) => {
    setLoading(true);
    try {
      // Verify OTP
      await publicApi.post(`${userVariablesUrl}/verify-otp/${user._id}`, {
        otp: otp.toString(),
      });
      toast.success("Account verified successfully");

      // Adding contact to SIB's list
      try {
        await publicApi.get(`${authUrl}/addContactToSibList/${user._id}`);
      } catch (err) {}

      setRefresh(true);
    } catch (err) {
      toast.error(
        err.error ||
          err.response?.data?.message ||
          "Something went wrong, Please try again later"
      );
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP button active after 1 minute
  const handleResend = async () => {
    try {
      setDisableResend(true);
      await publicApi.post(`${userVariablesUrl}/send-otp/${user._id}`);

      toast.info("OTP has been sent again");
      setTimeout(() => {
        setDisableResend(false);
      }, 60000);
    } catch (err) {
      toast.error(
        err.error ||
          err.response?.data?.message ||
          "Something went wrong, Please try again later"
      );
    }
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="row justify-content-md-center">
          <div className="col-xs-12 col-md-6">
            <form
              className="form-control-sm"
              onSubmit={handleSubmit(onOtpSubmit)}
            >
              <div className="alert alert-primary" role="alert">
                We've sent an OTP at your email address, it is valid for 10
                minutes.
              </div>
              <div className="mb-3">
                <label htmlFor="otp" className="form-label">
                  One-time password
                </label>
                <input
                  disabled={loading}
                  type="number"
                  className="form-control"
                  {...register("otp", {
                    required: true,
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message: "Invalid OTP format",
                    },
                  })}
                />
                {errors?.otp && (
                  <span className="text-danger">{errors.otp.message}</span>
                )}
              </div>
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
                  "Verify"
                )}
              </button>
              <button
                type="button"
                className="btn btn-link w-100"
                onClick={handleResend}
                disabled={disableResend}
              >
                Resend OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
