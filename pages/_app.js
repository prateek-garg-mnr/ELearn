import React from "react";

import TopNav from "../components/TopNav";

import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import "../public/css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/reactToastify.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer position="top-center"/>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
