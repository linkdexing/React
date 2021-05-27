import Head from "next/head";
import { useEffect, useState } from "react";

import Footer from "../components/footer";
import Header from "../components/header";

import { privateApi } from "../api";
import { authUrl } from "../api/endpoints";

import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await privateApi.get(`${authUrl}/isAuthenticated`);
        if (res.data.ok) {
          setUser(res.data.user);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  pageProps.user = user;
  pageProps.setUser = setUser;

  return (
    <>
      <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div>
        <div
          style={{ height: "90vh", overflow: "scroll", overflowX: "hidden" }}
        >
          <Header user={user} />
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}
