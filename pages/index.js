import { useRouter } from "next/router";
import { useEffect } from "react";
import PublicHOC from "../components/publicHOC";

// Home page redirecting to login
export default function Home({ user }) {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, []);
  return (
    <PublicHOC user={user}>
      <div>Redirecting...</div>
    </PublicHOC>
  );
}
