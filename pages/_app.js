import React from "react";

import TopNav from "../components/TopNav";

import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import '../public/css/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
