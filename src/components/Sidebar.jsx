import { Children } from "react";
import { Link } from "react-router-dom";
// import BottomRightAdv from "../components/BottomRightAdv";

const links = [
  { link: "/", label: "Add Links" },
  { link: "/links-archive", label: "Links Archive" },
  { link: "/change-password", label: "Change Password" },
];

const Sidebar = () => {
  return (
    <div className="d-flex flex-column col-sm-12 col-md-3 mt-4 align-items-center">
      <div>
        <h1 className="display-6 lead">Your Account</h1>
        <ul style={{ fontSize: "1.3rem" }}>
          {Children.toArray(
            links.map(({ link, label }) => {
              return (
                <li>
                  <Link to={link}>{label}</Link>
                </li>
              );
            })
          )}
          <li>
            <a href="https://linkdexing.com/buy-credit/">Get Credits</a>
          </li>
        </ul>
      </div>
      {/* <div className="mt-5 ms-5">
        <BottomRightAdv />
      </div> */}
    </div>
  );
};

export default Sidebar;
