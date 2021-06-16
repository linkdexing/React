import { useRouter } from "next/router";
import { useEffect } from "react";

const PrivateHOC = ({ user, children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      return router.push("/");
    }

    if (!user.verified) {
      router.push("/verification");
    }
  }, [user]);

  return <>{children}</>;
};

export default PrivateHOC;
