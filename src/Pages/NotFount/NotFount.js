import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Header/Navbar";

const NotFount = () => {
  const style = {
    height: "400px"
  };
  return (
    <div>
      <Navbar />
      <div style={style} className="text-center d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Page is under construction...</p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFount;
