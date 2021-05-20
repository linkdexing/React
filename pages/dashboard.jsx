import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { privateApi } from "../api";
import { orderUrl } from "../api/endpoints";
import PrivateHOC from "../components/PrivateHOC";

export default function DashboardPage(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      await privateApi.post(`${orderUrl}`, values);
      toast.success("Order created");
    } catch (err) {
      toast.error("Unable to create order");
    }
  };

  return (
    <PrivateHOC user={props.user}>
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
                  <div class='input-group mb-3'>
                    <div class='input-group mb-3'>
                      <span class='input-group-text' id='basic-addon3'>
                        Dripfeed (Number of days)
                      </span>
                      <input
                        type='number'
                        class='form-control'
                        id='basic-url'
                        aria-describedby='basic-addon3'
                        placeholder='        Range of 1 to 30'
                        {...register("dripfeed", {
                          required: true,
                          max: 30,
                        })}
                      />

                      {errors?.dripfeed && (
                        <span className='text-danger'>
                          Must be between 1 and 30
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className='mb-3'>
                  <div class='input-group'>
                    <span class='input-group-text'>Paste Links</span>
                    <textarea
                      class='form-control'
                      aria-label='With textarea'
                      {...register("links", {
                        required: true,
                      })}
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button type='submit' className='btn btn-primary w-100'>
                    Add Links
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-4 container'>
            <div className='justify-content-center'>
              <h1>Your Account</h1>
              <ul>
                <li>
                  <div>
                    <Link href='/'>
                      <a>Add Links</a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href='/history'>
                      <a>History of orders</a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href='/'>
                      <a>Edit your account</a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href='/'>
                      <a>Change password</a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PrivateHOC>
  );
}
