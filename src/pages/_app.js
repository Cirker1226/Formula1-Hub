import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/globals.css";
import "../styles/index.css";
import "../styles/NavbarSuperior.css";

import NavbarSuperior from "../components/NavbarSuperior";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavbarSuperior />

      <main className="">
        <Component {...pageProps} />
      </main>
    </>
  );
}