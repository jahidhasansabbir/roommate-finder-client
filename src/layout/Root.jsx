import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
        <Header></Header>
        <div className="min-h-[70vh] mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default Root;
