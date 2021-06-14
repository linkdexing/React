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
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);

  const getUser = ({ user, verified }) => ({ ...user, verified });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await privateApi.get(`${authUrl}/isAuthenticated`);
        if (res.data.ok) {
          setUser(getUser(res.data));
          setLoading(false);
        } else {
          if (res.data.user) {
            setUser(getUser(res.data));
          }

          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        setUser(null);
      }
    };
    if (refresh) {
      fetchUser();
      setRefresh(false);
    }
  }, [refresh]);

  if (loading) {
    return <div>Loading....</div>;
  }

  pageProps.user = user;
  pageProps.setRefresh = setRefresh;

  return (
    <>
      <Head>
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4'
          crossOrigin='anonymous'
        ></script>
      </Head>

      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      >
        <div>
          <div
            style={{ height: "90vh", overflow: "scroll", overflowX: "hidden" }}
          >
            <Header user={user} setRefresh={setRefresh} />
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </GoogleReCaptchaProvider>

      <ToastContainer />
    </>
  );
}
