import { useRouter } from "next/router";
import { useEffect } from "react";

const PublicHOC = ({ user, children }) => {
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (!user.verified) {
        router.replace("/verification");
      } else {
        router.replace("/dashboard");
      }
    }
  }, [user]);

  return <>{children}</>;
};

export default PublicHOC;
