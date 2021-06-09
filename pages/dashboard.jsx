import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { privateApi } from "../api";
import { orderUrl } from "../api/endpoints";
import PrivateHOC from "../components/PrivateHOC";
import Sidebar from "../components/Sidebar";

export default function DashboardPage(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      await privateApi.post(`${orderUrl}`, values);
      toast.success("Links Added");
      reset();
    } catch (err) {
      toast.error("Unable to create order");
    }
  };

  return (
    <PrivateHOC user={props.user}>
      <div className="container" style={{ minHeight: "80vh" }}>
        <div className="row">
          <div className="col-7">
            <div
              className="card w-100 my-4"
              style={{ width: 500, marginLeft: 20 }}
            >
              <div className="card-body">
                <form
                  className="form-control-sm"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="accordion mb-3" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
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
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          Links in the box below should be added one by one in a
                          new line:-
                          <ul>
                            http://linkdexing_one.com <br />
                            http://linkdexing_two.com <br />
                            https://linkdexing_three.com
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">Paste Links</span>
                      <textarea
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
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                          Dripfeed (Number of days)
                        </span>
                        <input
                          type="number"
                          className="form-control"
                          id="basic-url"
                          aria-describedby="basic-addon3"
                          placeholder="        Range of 1 to 30"
                          {...register("dripfeed", {
                            required: true,
                            max: 30,
                            min: 1,
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
                  <div>
                    <button type="submit" className="btn btn-primary btn-lg">
                      Add Links
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </PrivateHOC>
  );
}
