import Link from "next/link";
import { useForm } from "react-hook-form";
import { privateApi } from "../api";
import { authUrl } from "../api/endpoints";
import PrivateHOC from "../components/PrivateHOC";

export default function DashboardPage(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    const res = await privateApi.post(`${authUrl}/dashboard`, values);
    console.log(res);
  };

  return (
    <PrivateHOC user={props.user}>
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
                <div className="mb-3">
                  <div class="input-group mb-3">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon3">
                        Dripfeed (Number of days)
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        placeholder="        Range of 1 to 30"
                        {...register("dripfeed", {
                          required: true,
                          pattern: /^(0?[1-9]|[12][0-9]|3[01])$/,
                        })}
                      />

                      {errors?.dripfeed && (
                        <span className="text-danger">
                          Must be between 1 and 30
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div class="input-group">
                    <span class="input-group-text">Paste Links</span>
                    <textarea
                      class="form-control"
                      aria-label="With textarea"
                      {...register("links", {
                        required: true,
                      })}
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button type="submit" className="btn btn-primary w-100">
                    Add Links
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PrivateHOC>
  );
}
