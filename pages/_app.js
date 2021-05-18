import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";
import Footer from "../components/footer";
import Header from "../components/header";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      {/* <Login /> */}
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
