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
                  <script>{`$(".dropdown-toggle").dropdown()`}</script>
                  <div class="btn-group dropright">
                    <button
                      type="button"
                      class="btn btn-secondary dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropright
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>

                  <div style={{ fontFamily: "Verdana" }}>
                    Links in the box below should be added one by one :-
                    <div style={{ fontFamily: "Arial" }}>
                      <ul>
                        http://linkdexing_one.com <br />
                        http://linkdexing_two.com <br />
                        https://linkdexing_three.com
                      </ul>
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
