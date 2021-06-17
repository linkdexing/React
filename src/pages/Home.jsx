import { Redirect } from "react-router";

// Home page redirecting to login
export default function Home() {
  return <Redirect to='/login' />;
}
