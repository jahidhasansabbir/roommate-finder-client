import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { AuthContext } from "../context/AuthContext";
import Loading from "../pages/Loading";

const Root = () => {
  // const { loading } = use(AuthContext);
  // return !loading ? (
  //   <div className="max-w-[1440px] mx-auto">
  //     <Header></Header>
  //   {
  //     import.meta.env.VITE_name
  //   }
  //     <div className="min-h-[70vh] mx-auto">
  //       <Outlet></Outlet>
  //     </div>
  //     <Footer></Footer>
  //   </div>
  // ) : (
  //   <Loading></Loading>
  // );
  return(
    <div className="max-w-[1440px] mx-auto">
       <Header></Header>
    {/* {
      import.meta.env.VITE_name
    } */}
      <div className="min-h-[70vh] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
