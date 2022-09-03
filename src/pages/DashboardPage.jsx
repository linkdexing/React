import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { privateApi } from "../api";
import { orderUrl } from "../api/endpoints";
import Sidebar from "../components/Sidebar";
// import TopLeftAdv from "../components/TopLeftAdv";

// Dashboard or Home page
export default function DashboardPage({ user, setRefresh }) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      //createOrder
      await privateApi.post(`${orderUrl}`, values);
      toast.success("Links Added");
      //Reset form
      reset();
      setRefresh(true);
    } catch (err) {
      toast.error(
        err.response?.data.message ||
          "Something went wrong, Please try again later"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-2" style={{ minHeight: "80vh" }}>
      <div className="row">
        <div className="col-sm-12 col-md-9">
          {/* <div>
            <TopLeftAdv />
          </div> */}
          <div
            className="card w-100 my-4"
            style={{ width: 500, marginLeft: 20 }}
          >
            <div className="card-body">
              <form
                className="form-control-sm"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="accordion mb-3">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How to Add Links ?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                    >
                      <div className="accordion-body">
                        Please add links in the box below as per the following
                        format:-
                        <ul>
                          http://link1.com <br />
                          http://link2.com <br />
                          https://link3.com
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="input-group mb-3">
                    <div className="input-group mb-1">
                      <span className="input-group-text">
                        Campaign Name
                      </span>
                      <input
                        disabled={loading}
                        className="form-control ps-3"
                        placeholder="Enter Name (Minimum 3 characters)"
                        {...register("name", {
                          required: true,
                          minLength: 3,
                        })}
                      />
                    </div>
                    {errors?.name && (
                      <div className="text-danger">
                        * Group Name must be greater than 3 characters
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text">Paste Links</span>
                    <textarea
                      disabled={loading}
                      className="form-control"
                      aria-label="With textarea"
                      {...register("links", {
                        required: true,
                      })}
                    ></textarea>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group mb-3">
                    <div className="input-group mb-1">
                      <span className="input-group-text">
                        Dripfeed (Number of days)
                      </span>
                      <input
                        type="number"
                        disabled={loading}
                        className="form-control ps-3"
                        placeholder="Range of 1 to 30"
                        {...register("dripfeed", {
                          required: true,
                          max: 30,
                          min: 1,
                        })}
                      />
                    </div>
                    {errors?.dripfeed && (
                      <div className="text-danger">
                        * Must be between 1 and 30
                      </div>
                    )}
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary btn-lg"
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="ml-1">Adding Links...</span>
                      </>
                    ) : (
                      "Add Links"
                    )}
                  </button>
                  <div className="d-flex fs-5 align-items-center">
                    {/* <div>
                      Monthly Limit ={" "}
                      <strong className="me-4">
                        {user.userVariables.monthlyLimit}
                      </strong>{" "}
                      |
                    </div>
                    <div className="ms-4">
                      Monthly Used ={" "}
                      <strong>{user.userVariables.monthlyUsed}</strong>
                    </div> */}
                    <div className="ms-4">
                      Total Links Remaining ={" "}
                      <strong>
                        {user.userVariables.totalLimit -
                          user.userVariables.totalLinks}
                      </strong>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
