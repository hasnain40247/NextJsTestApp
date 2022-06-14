import Head from "next/head";
import Script from "next/script";
import Footer from "./Footer";
import Model from "./Model";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <Model />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
