import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { privateApi } from "../api";
import { authUrl } from "../api/endpoints";
import PrivateHOC from "../components/PrivateHOC";
import Sidebar from "../components/Sidebar";

const ChangePasswordPage = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const watchNewPassword = watch("newPassword");

  const onSubmit = async (values) => {
    try {
      await privateApi.post(`${authUrl}/change-password`, {
        newPassword: values.newPassword,
        oldPassword: values.oldPassword,
      });

      toast.success("Password changed successfully");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <PrivateHOC user={props.user}>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="mt-4 card p-3">
              <form
                className="form-control-sm"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-3">
                  <div className="mb-3">
                    <label htmlFor="oldPassword" className="form-label">
                      Old Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="oldPassword"
                      aria-describedby="old password"
                      {...register("oldPassword", {
                        required: true,
                      })}
                    />

                    {errors?.oldPassword && (
                      <span className="text-danger">
                        Old password is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <label for="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    aria-describedby="new password"
                    {...register("newPassword", {
                      required: "New password is required",
                      pattern: {
                        value: /^.{5,}$/,
                        message: "Password too short",
                      },
                    })}
                  />

                  {errors?.newPassword && (
                    <span className="text-danger">
                      {errors.newPassword.message}
                    </span>
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
                    aria-describedby="confirm new password"
                    {...register("newPasswordConfirm", {
                      required: "Confirm New password is required",
                      validate: (value) =>
                        value === watchNewPassword ||
                        "The passwords do not match",
                    })}
                  />

                  {errors?.newPasswordConfirm && (
                    <span className="text-danger">
                      {errors.newPasswordConfirm.message}
                    </span>
                  )}
                </div>

                <div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
    </PrivateHOC>
  );
};

export default ChangePasswordPage;
