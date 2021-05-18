import { useRouter } from "next/router";

const PublicHOC = ({ user, children }) => {
  const router = useRouter();

  if (user) {
    router.replace("/dashboard");
  }

  return <>{children}</>;
};

export default PublicHOC;
