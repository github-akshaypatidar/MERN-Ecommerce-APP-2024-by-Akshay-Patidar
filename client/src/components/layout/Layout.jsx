import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <h4>Layout</h4>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
