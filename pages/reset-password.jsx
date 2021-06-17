import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { publicApi } from "../api";
import { authUrl } from "../api/endpoints";

const ResetPasswordPage = () => {
  const router = useRouter();

  // extracting query params
  const { id, token } = router.query;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Constantly watches password
  const watchNewPassword = watch("newPassword");

  // values = newPasssword
  const onSubmit = async ({ newPassword }) => {
    try {
      // reset-password
      await publicApi.post(`${authUrl}/reset-password`, {
        newPassword,
        id,
        token,
      });
      toast.success("Password changed successfully, Please login to continue");
      router.push("/login");
    } catch (err) {
      toast.error(
        err.message ||
          err.response?.data.message ||
          "Something went wrong, Please try again later."
      );
    }
  };

  return (
    <div>
      <form className="container mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label for="newPassword" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            {...register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 5,
                message: "Password should be atleast 5 characters long",
              },
            })}
          />
          {errors?.newPassword && (
            <span className="text-danger">{errors.newPassword.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label for="newPasswordConfirm" className="form-label">
            Confirm New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPasswordConfirm"
            {...register("newPasswordConfirm", {
              validate: (value) =>
                value === watchNewPassword || "The passwords do not match",
            })}
          />
          {errors?.newPasswordConfirm && (
            <span className="text-danger">
              {errors.newPasswordConfirm.message}
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
