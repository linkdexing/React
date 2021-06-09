import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="d-flex col-5 align-items-center justify-content-end">
      <div>
        <h1>Your Account</h1>
        <ul>
          <li>
            <div>
              <Link href="/">
                <a>Add Links</a>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link href="/history">
                <a>Links Archive</a>
              </Link>
            </div>
          </li>

          <li>
            <div>
              <Link href="/change-password">
                <a>Change password</a>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
