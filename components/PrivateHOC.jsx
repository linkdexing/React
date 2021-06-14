import { useRouter } from "next/router";
import { useEffect } from "react";

const PrivateHOC = ({ user, children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      return router.replace("/");
    }

    if (!user.verified) {
      router.replace("/verification");
    }
  }, [user]);

  return <>{children}</>;
};

export default PrivateHOC;
