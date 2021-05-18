import { useRouter } from "next/router";

const PrivateHOC = ({ user, children }) => {
  const router = useRouter();

  console.log(user);

  if (!user) {
    router.replace("/");
  }

  return <>{children}</>;
};

export default PrivateHOC;
